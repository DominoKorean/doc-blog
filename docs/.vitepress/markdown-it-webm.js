// Render ![description](./clip.webm) as a silent, looping animation.
export default function webmPlugin(md) {
  const image = md.renderer.rules.image

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    let src = token.attrGet('src') || ''

    if (!/\.webm$/i.test(src.split(/[?#]/, 1)[0])) {
      return image(tokens, idx, options, env, self)
    }

    // Match VitePress's image path handling so Vue can bundle local assets.
    if (!/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(src)) {
      if (!/^\.?\//.test(src)) src = './' + src
      src = decodeURIComponent(src)
    }

    const escape = md.utils.escapeHtml
    const description = self.renderInlineAsText(token.children || [], options, env)
    const title = token.attrGet('title')
    const labelAttr = description ? ` aria-label="${escape(description)}"` : ''
    const titleAttr = title ? ` title="${escape(title)}"` : ''

    return `<video class="markdown-video" src="${escape(src)}" autoplay loop muted playsinline${labelAttr}${titleAttr}></video>`
  }
}
