<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const dialog = ref(null)
const selectedImage = ref(null)
let content
let previousOverflow

function restoreScrolling() {
  if (previousOverflow !== undefined) {
    document.documentElement.style.overflow = previousOverflow
    previousOverflow = undefined
  }
}

function close() {
  dialog.value?.close()
  restoreScrolling()
}

function openImage(event) {
  const image = event.target
  if (!(image instanceof HTMLImageElement) || !image.classList.contains('image-lightbox-trigger')) return
  if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return

  event.preventDefault()
  selectedImage.value = {
    src: image.currentSrc || image.src,
    alt: image.alt || '확대된 이미지'
  }
  image.focus({ preventScroll: true })
  previousOverflow = document.documentElement.style.overflow
  document.documentElement.style.overflow = 'hidden'
  dialog.value.showModal()
}

onMounted(() => {
  content = dialog.value.closest('.vp-doc')
  if (!content) return

  content.querySelectorAll('img').forEach((image, index) => {
    if (image.closest('a, button, dialog')) return
    image.classList.add('image-lightbox-trigger')
    image.tabIndex = 0
    image.setAttribute('role', 'button')
    image.setAttribute('aria-haspopup', 'dialog')
    image.setAttribute('aria-label', `${image.alt || `문서 이미지 ${index + 1}`} 크게 보기`)
  })
  content.addEventListener('click', openImage)
  content.addEventListener('keydown', openImage)
})

onBeforeUnmount(() => {
  content?.removeEventListener('click', openImage)
  content?.removeEventListener('keydown', openImage)
  close()
})
</script>

<template>
  <dialog
    ref="dialog"
    class="image-lightbox"
    aria-label="이미지 크게 보기"
    @click.self="close"
    @cancel.prevent="close"
    @close="restoreScrolling"
  >
    <button class="image-lightbox-close" type="button" aria-label="닫기" autofocus @click="close">×</button>
    <img v-if="selectedImage" :src="selectedImage.src" :alt="selectedImage.alt" />
  </dialog>
</template>

<style>
.vp-doc .image-lightbox-trigger {
  cursor: zoom-in;
}

.vp-doc .image-lightbox-trigger:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

.image-lightbox {
  position: fixed;
  inset: 0;
  margin: auto;
  padding: 44px 12px 12px;
  border: 0;
  border-radius: 8px;
  max-width: calc(100vw - 24px);
  max-height: calc(100dvh - 24px);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 12px 48px rgb(0 0 0 / 35%);
}

.image-lightbox::backdrop {
  background: rgb(0 0 0 / 80%);
  cursor: zoom-out;
}

.image-lightbox img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - 80px);
  object-fit: contain;
}

.image-lightbox-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  font-size: 28px;
  cursor: pointer;
}

.image-lightbox-close:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -4px;
}
</style>
