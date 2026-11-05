<script setup>
import allBrushesZip from './brush_qr/ibis-paint-bayer-brushes.zip?url'

const qrImages = import.meta.glob('./brush_qr/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
})
const patterns = import.meta.glob('./preview/*.svg', {
  eager: true,
  query: '?url',
  import: 'default'
})
const brushes = Object.entries(qrImages)
  .map(([path, qr]) => {
    const step = Number(path.match(/Brush_(\d+)_/)[1])
    return { step, coverage: step * 6.25, qr, fileName: path.split('/').pop(), pattern: patterns[`./preview/bayer-${step}.svg`] }
  })
  .sort((a, b) => a.step - b.step)
</script>

<template>
  <section class="bayer-gallery" aria-label="Bayer 디더링 그라데이션과 브러시 QR">
    <div class="bayer-toolbar">
      <span class="bayer-toolbar-note">브러시 QR 원본 {{ brushes.length }}개</span>
      <a class="bayer-download bayer-download-all" :href="allBrushesZip" download="ibis-paint-bayer-brushes.zip">모두 다운로드 <span aria-hidden="true">↓</span></a>
    </div>
    <div class="bayer-heading" aria-hidden="true">
      <span>밀도 <span class="bayer-arrow">↓</span></span>
      <span>IBIS PAINT <span class="bayer-heading-tag">BRUSH QR</span></span>
    </div>
    <div class="bayer-gradient">
      <div v-for="brush in brushes" :key="brush.step" class="bayer-step">
        <div
          class="bayer-pattern"
          :style="{ backgroundImage: 'url(' + JSON.stringify(brush.pattern) + ')' }"
          role="img"
          :aria-label="`4×4 Bayer ${brush.step}/16, 채움 비율 ${brush.coverage}%`"
        ></div>
        <div class="bayer-brush">
          <div class="bayer-meta">
            <span class="bayer-fraction"><strong>{{ brush.step }}</strong><span>/ 16</span></span>
            <span class="bayer-coverage">{{ brush.coverage }}%</span>
          </div>
          <a
            class="bayer-qr"
            :href="brush.qr"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${brush.step}/16 브러시 QR 원본 이미지 열기 (새 탭)`"
          >
            <span class="bayer-qr-frame">
              <img :src="brush.qr" :alt="`Pixel Art Dither Brush ${brush.step} QR 코드`" width="640" height="680" loading="lazy" />
            </span>
          </a>
          <a class="bayer-download" :href="brush.qr" :download="brush.fileName" :aria-label="`${brush.step}/16 브러시 QR 원본 다운로드`">QR 다운로드 <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </div>
    <div class="bayer-footer"><span>4×4 BAYER MATRIX</span><span>15 BRUSHES · 6.25% → 93.75%</span></div>
  </section>
</template>

<style scoped>
.bayer-gallery {
  --bayer-columns: minmax(0, 1fr) minmax(0, 320px);
  --bayer-gap: clamp(20px, 5vw, 40px);
  margin: 36px 0 40px;
}
.bayer-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}
.bayer-toolbar-note { color: var(--vp-c-text-2); font-size: 12px; }
.bayer-download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  transition: border-color .18s ease, background-color .18s ease;
}
.bayer-download:hover { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.bayer-download:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.bayer-download-all { margin-left: auto; }
.bayer-heading,
.bayer-step {
  display: grid;
  grid-template-columns: var(--bayer-columns);
  column-gap: var(--bayer-gap);
}
.bayer-heading {
  align-items: center;
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .12em;
}
.bayer-arrow { margin-left: 8px; color: var(--vp-c-brand-1); }
.bayer-heading-tag {
  display: inline-block;
  margin-left: 6px;
  color: var(--vp-c-text-1);
  letter-spacing: .04em;
}
.bayer-step { min-height: 448px; }
.bayer-pattern {
  background-repeat: repeat;
  background-size: 128px 64px;
  image-rendering: pixelated;
}
.bayer-step:first-child .bayer-pattern { border-radius: 16px 16px 0 0; }
.bayer-step:last-child .bayer-pattern { border-radius: 0 0 16px 16px; }
.bayer-brush {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.bayer-step:last-child .bayer-brush { border-bottom: 0; }
.bayer-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  font-variant-numeric: tabular-nums;
}
.bayer-fraction { display: flex; align-items: baseline; gap: 5px; white-space: nowrap; }
.bayer-fraction strong {
  color: var(--vp-c-text-1);
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -.06em;
}
.bayer-fraction > span { color: var(--vp-c-text-3); font-size: 12px; }
.bayer-coverage { color: var(--vp-c-text-2); font-family: var(--vp-font-family-mono); font-size: 12px; }
.bayer-qr {
  display: grid;
  width: 100%;
  gap: 7px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: transform .18s ease, color .18s ease;
}
.bayer-qr-frame {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 6%);
}
.bayer-qr img {
  /* The 640×680 export contains a 480×480 QR area at (80, 126), including its quiet zone. */
  position: absolute;
  left: -16.666667%;
  top: -26.25%;
  display: block;
  width: 133.333333%;
  max-width: none;
  height: auto;
  margin: 0;
  image-rendering: pixelated;
}
.bayer-qr:hover { color: var(--vp-c-brand-1); transform: translateY(-2px); }
.bayer-qr:focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 5px; border-radius: 10px; }
.bayer-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  letter-spacing: .04em;
}
@media (max-width: 540px) {
  .bayer-gallery { --bayer-columns: minmax(32px, 1fr) minmax(0, 256px); --bayer-gap: 12px; margin-top: 28px; }
  .bayer-heading { font-size: 11px; letter-spacing: .05em; }
  .bayer-heading-tag { display: block; margin-left: 0; }
  .bayer-step { min-height: 352px; }
  .bayer-brush { gap: 8px; }
  .bayer-fraction strong { font-size: 24px; }
  .bayer-fraction > span, .bayer-coverage { font-size: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .bayer-qr, .bayer-download { transition: none; }
}
</style>
