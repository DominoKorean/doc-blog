// Render Markdown image syntax pointing to a video as a native video element.
export default function videoPlugin(md) {
  const image = md.renderer.rules.image

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    let src = token.attrGet('src') || ''

    if (!/\.(?:mp4|m4v|webm|ogv|ogg)$/i.test(src.split(/[?#]/, 1)[0])) {
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
    const repeat = description.trim().toLowerCase() === 'repeat'
    const label = repeat ? title || '반복 재생 동영상' : description
    const labelAttr = label ? ` aria-label="${escape(label)}"` : ''
    const titleAttr = title ? ` title="${escape(title)}"` : ''
    const playbackAttr = repeat ? ' autoplay loop muted playsinline' : ' controls playsinline preload="metadata"'

    return `<video class="markdown-video" src="${escape(src)}"${playbackAttr}${labelAttr}${titleAttr}></video>`
  }
}
