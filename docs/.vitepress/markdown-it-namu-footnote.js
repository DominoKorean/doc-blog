/**
 * markdown-it plugin for Namu Wiki-style footnotes.
 *
 * Syntax:
 *   [* content]        → auto-numbered footnote
 *   [*label content]   → named footnote (label shown instead of number,
 *                         excluded from auto-numbering counter)
 */
export default function namuFootnotePlugin(md) {
  md.inline.ruler.push('namu_footnote', namuFootnoteRule)
  md.core.ruler.push('namu_footnote_block', namuFootnoteBlock)

  md.renderer.rules.namu_footnote_ref = function (tokens, idx) {
    const { id, displayLabel } = tokens[idx].meta
    return (
      '<sup class="footnote-ref">' +
      '<a href="#' + id + '" id="' + id + 'ref">[' + escapeHtml(displayLabel) + ']</a>' +
      '</sup>'
    )
  }

  md.renderer.rules.namu_footnote_block_open = function (tokens, idx) {
    const { footnotes } = tokens[idx].meta
    const parts = [
      '<section class="footnotes namu-footnotes">\n',
      '<hr class="footnotes-sep">\n',
      '<ol class="footnotes-list">\n'
    ]

    for (const fn of footnotes) {
      const contentHtml = md.renderInline(fn.content, { _namuRenderingContent: true })
      parts.push(
        '<li id="' + fn.id + '" class="footnote-item" data-label="' + escapeHtml(fn.displayLabel) + '">',
        '<p>' + contentHtml + ' <a href="#' + fn.id + 'ref" class="footnote-backref">\u21a9\uFE0E</a></p>',
        '</li>\n'
      )
    }

    parts.push('</ol>\n</section>\n')
    return parts.join('')
  }

  md.renderer.rules.namu_footnote_block_close = function () {
    return ''
  }
}

function namuFootnoteRule(state, silent) {
  // Skip when rendering footnote content (prevent nesting)
  if (state.env._namuRenderingContent) return false

  const start = state.pos
  const max = state.posMax

  // Minimum: [* x] = 5 chars
  if (start + 4 > max) return false
  if (state.src.charCodeAt(start) !== 0x5B /* [ */) return false
  if (state.src.charCodeAt(start + 1) !== 0x2A /* * */) return false

  // Reject [**...] or [*]
  const afterStar = state.src.charCodeAt(start + 2)
  if (afterStar === 0x2A || afterStar === 0x5D) return false

  // Find matching closing bracket
  let pos = start + 2
  let depth = 1
  while (pos < max) {
    const ch = state.src.charCodeAt(pos)
    if (ch === 0x5B) depth++
    else if (ch === 0x5D) {
      depth--
      if (depth === 0) break
    }
    pos++
  }
  if (depth !== 0) return false

  const inner = state.src.slice(start + 2, pos)
  if (!inner) return false

  let label = null
  let content

  if (inner.charCodeAt(0) === 0x20 /* space */) {
    // [* content] — auto-numbered
    content = inner.slice(1).trim()
  } else {
    // [*label content] — named
    const spaceIdx = inner.indexOf(' ')
    if (spaceIdx === -1) return false
    label = inner.slice(0, spaceIdx)
    content = inner.slice(spaceIdx + 1).trim()
  }

  if (!content) return false
  if (silent) return true

  // Initialise per-document state
  if (!state.env.namuFootnotes) {
    state.env.namuFootnotes = []
    state.env.namuAutoCounter = 0
  }

  const index = state.env.namuFootnotes.length
  const displayLabel = label != null ? label : String(++state.env.namuAutoCounter)
  const id = 'fn_nw' + (index + 1)

  state.env.namuFootnotes.push({ index, id, label, displayLabel, content })

  const token = state.push('namu_footnote_ref', '', 0)
  token.meta = { id, displayLabel }

  state.pos = pos + 1
  return true
}

function namuFootnoteBlock(state) {
  const footnotes = state.env.namuFootnotes
  if (!footnotes || !footnotes.length) return

  const open = new state.Token('namu_footnote_block_open', '', 0)
  open.meta = { footnotes }
  state.tokens.push(open)

  state.tokens.push(new state.Token('namu_footnote_block_close', '', 0))
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
