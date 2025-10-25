// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

const isClient = typeof window !== 'undefined'
let tooltipElement
let activeTooltipTarget = null
let tooltipTouchTimeout = 0
let tooltipHideTimeout = 0
let globalTooltipListenersBound = false
let tooltipPointerInside = false

const TOOLTIP_HIDE_DELAY = 80

function extractFootnoteHTML(node) {
  const clone = node.cloneNode(true)
  clone.querySelectorAll('.footnote-backref').forEach((backref) => backref.remove())
  return clone.innerHTML.trim()
}

function ensureTooltipElement() {
  if (tooltipElement || !isClient) {
    return tooltipElement
  }
  tooltipElement = document.createElement('div')
  tooltipElement.className = 'footnote-tooltip-layer'
  tooltipElement.dataset.active = 'false'
  document.body.appendChild(tooltipElement)
  tooltipElement.addEventListener('mouseenter', () => {
    tooltipPointerInside = true
    window.clearTimeout(tooltipHideTimeout)
  })
  tooltipElement.addEventListener('mouseleave', () => {
    tooltipPointerInside = false
    scheduleTooltipHide(activeTooltipTarget)
  })
  return tooltipElement
}

function hideFootnoteTooltip(target) {
  if (target && target !== activeTooltipTarget) {
    return
  }

  activeTooltipTarget = null
  window.clearTimeout(tooltipTouchTimeout)
  window.clearTimeout(tooltipHideTimeout)
  tooltipPointerInside = false

  if (!tooltipElement) {
    return
  }

  tooltipElement.dataset.active = 'false'
  tooltipElement.innerHTML = ''
}

function scheduleTooltipHide(target) {
  window.clearTimeout(tooltipHideTimeout)

  tooltipHideTimeout = window.setTimeout(() => {
    const stillActive = !target || target === activeTooltipTarget
    const targetHovered = Boolean(activeTooltipTarget && activeTooltipTarget.matches(':hover'))
    const targetFocused = activeTooltipTarget && document.activeElement === activeTooltipTarget

    if (!tooltipPointerInside && !targetHovered && !targetFocused && stillActive) {
      hideFootnoteTooltip(target)
    }
  }, TOOLTIP_HIDE_DELAY)
}

function positionFootnoteTooltip(target) {
  const tooltip = ensureTooltipElement()
  if (!tooltip) return

  const html = target.getAttribute('data-footnote-html')
  if (!html) return

  tooltip.innerHTML = html
  tooltip.dataset.placement = 'top'
  tooltip.style.setProperty('--footnote-tooltip-left', '-9999px')
  tooltip.style.setProperty('--footnote-tooltip-top', '-9999px')

  const rect = target.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()
  const viewportWidth = document.documentElement.clientWidth
  const scrollX = window.scrollX || window.pageXOffset
  const scrollY = window.scrollY || window.pageYOffset
  const margin = 12

  const arrowViewportX = rect.left + rect.width / 2
  const arrowPageX = arrowViewportX + scrollX

  let leftViewport = arrowViewportX - tooltipRect.width / 2
  leftViewport = Math.max(margin, Math.min(leftViewport, viewportWidth - tooltipRect.width - margin))
  const left = leftViewport + scrollX

  let top = rect.top + scrollY - tooltipRect.height - 12
  let placement = 'top'

  if (top < scrollY + margin) {
    top = rect.bottom + scrollY + 12
    placement = 'bottom'
  }

  tooltip.dataset.placement = placement

  const arrowOffset = Math.max(
    12,
    Math.min(tooltipRect.width - 12, arrowPageX - left)
  )

  tooltip.style.setProperty('--footnote-tooltip-left', `${left}px`)
  tooltip.style.setProperty('--footnote-tooltip-top', `${top}px`)
  tooltip.style.setProperty('--footnote-tooltip-arrow-offset', `${arrowOffset}px`)
  tooltip.dataset.active = 'true'
}

function showFootnoteTooltip(target) {
  if (!target || !isClient) return
  activeTooltipTarget = target
  positionFootnoteTooltip(target)
}

function setupGlobalTooltipListeners() {
  if (globalTooltipListenersBound || !isClient) {
    return
  }

  globalTooltipListenersBound = true
  ensureTooltipElement()
  const hide = () => hideFootnoteTooltip()

  window.addEventListener('scroll', hide, { passive: true })
  window.addEventListener('resize', hide)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hide()
    }
  })
  document.addEventListener('click', (event) => {
    if (!activeTooltipTarget) return
    if (activeTooltipTarget === event.target || activeTooltipTarget.contains(event.target)) {
      return
    }
    if (tooltipElement && (tooltipElement === event.target || tooltipElement.contains(event.target))) {
      return
    }
    hide()
  })
}

function bindFootnoteTooltipEvents(target) {
  if (target.dataset.footnoteTooltipBound === 'true') {
    return
  }

  const show = () => {
    window.clearTimeout(tooltipHideTimeout)
    showFootnoteTooltip(target)
  }
  const queueHide = () => {
    scheduleTooltipHide(target)
  }
  const hideImmediate = () => hideFootnoteTooltip(target)
  const handleTouch = () => {
    show()
    window.clearTimeout(tooltipTouchTimeout)
    tooltipTouchTimeout = window.setTimeout(() => {
      if (activeTooltipTarget === target) {
        hideFootnoteTooltip(target)
      }
    }, 2500)
  }

  target.addEventListener('mouseenter', show)
  target.addEventListener('mouseleave', queueHide)
  target.addEventListener('focus', show)
  target.addEventListener('blur', hideImmediate)
  target.addEventListener('touchstart', handleTouch, { passive: true })

  target.dataset.footnoteTooltipBound = 'true'
}

function applyFootnoteTooltips() {
  if (!isClient) {
    return
  }

  const footnoteItems = document.querySelectorAll('.footnotes li[id]')

  if (!footnoteItems.length) {
    document
      .querySelectorAll('.footnote-tooltip[data-footnote-html]')
      .forEach((ref) => {
        ref.removeAttribute('data-footnote-html')
        ref.classList.remove('footnote-tooltip')
      })
    hideFootnoteTooltip()
    return
  }

  const contents = new Map()

  footnoteItems.forEach((item) => {
    const content = extractFootnoteHTML(item)
    if (content) {
      contents.set(item.id, content)
    }
  })

  document.querySelectorAll('.footnote-ref').forEach((ref) => {
    const link = ref.querySelector('a[href^="#fn"]') || ref
    const href = link.getAttribute('href')
    if (!href) return

    const id = href.replace('#', '')
    const html = contents.get(id)

    if (html) {
      link.setAttribute('data-footnote-html', html)
      link.classList.add('footnote-tooltip')
      bindFootnoteTooltipEvents(link)
    } else {
      link.removeAttribute('data-footnote-html')
      link.classList.remove('footnote-tooltip')
    }
  })
}

function initFootnoteTooltips() {
  if (!isClient) {
    return
  }

  setupGlobalTooltipListeners()
  const queueApply = () => window.requestAnimationFrame(applyFootnoteTooltips)

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', queueApply, { once: true })
  } else {
    queueApply()
  }

  return queueApply
}

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (!isClient) {
      return
    }

    const queueApply = initFootnoteTooltips()

    if (router && typeof queueApply === 'function') {
      const previousHook = router.onAfterRouteChanged
      router.onAfterRouteChanged = (...args) => {
        if (typeof previousHook === 'function') {
          previousHook.apply(router, args)
        }
        queueApply()
      }
    }
  }
}
