import assert from 'node:assert/strict'
import test from 'node:test'

import { downloadBrushImages, getDownloadMode } from '../docs/art/start_guide/Ibispaint_pixelart/brush/brush-downloads.js'

test('phones and iPads receive images; desktop and touch laptops receive ZIP', () => {
  const devices = [
    [{ userAgentData: { mobile: true } }, 'images'],
    [{ userAgent: 'Mozilla/5.0 (Linux; Android 15) Chrome' }, 'images'],
    [{ userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0) Safari' }, 'images'],
    [{ userAgent: 'Mozilla/5.0 (iPad; CPU OS 18_0) Safari' }, 'images'],
    [{ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) Safari', platform: 'MacIntel', maxTouchPoints: 5 }, 'images'],
    [{ userAgent: 'Mozilla/5.0 (Windows NT 10.0) Chrome', platform: 'Win32', maxTouchPoints: 10 }, 'zip'],
    [{ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) Safari', platform: 'MacIntel', maxTouchPoints: 0 }, 'zip'],
    [undefined, 'zip']
  ]
  for (const [device, expected] of devices) assert.equal(getDownloadMode(device), expected)
})

test('all 15 PNG requests start in numeric order with sortable filenames', async () => {
  const brushes = Array.from({ length: 15 }, (_, i) => ({ step: 15 - i, qr: `/qr/${15 - i}.png`, fileName: `brush-${15 - i}.png` }))
  const requests = []
  const progress = []
  let release
  const running = downloadBrushImages(brushes, {
    requestDownload: file => requests.push(file),
    onProgress: count => progress.push(count),
    wait: () => new Promise(resolve => { release = resolve })
  })
  assert.deepEqual(requests, [{ qr: '/qr/1.png', fileName: '01-brush-1.png' }])
  for (let i = 1; i < 15; i++) {
    release()
    await Promise.resolve()
  }
  assert.equal(await running, 15)
  assert.deepEqual(requests.map(file => file.qr), [
    '/qr/1.png', '/qr/2.png', '/qr/3.png', '/qr/4.png', '/qr/5.png',
    '/qr/6.png', '/qr/7.png', '/qr/8.png', '/qr/9.png', '/qr/10.png',
    '/qr/11.png', '/qr/12.png', '/qr/13.png', '/qr/14.png', '/qr/15.png'
  ])
  assert.equal(requests[9].fileName, '10-brush-10.png')
  assert.deepEqual(progress, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
})

test('leaving the page cancels remaining image requests', async () => {
  const controller = new AbortController()
  const requests = []
  const count = await downloadBrushImages([
    { step: 1, qr: '/1.png', fileName: '1.png' },
    { step: 2, qr: '/2.png', fileName: '2.png' }
  ], {
    requestDownload: file => requests.push(file),
    signal: controller.signal,
    wait: async () => controller.abort()
  })
  assert.equal(count, 1)
  assert.equal(requests.length, 1)
})

test('a failed request stops the queue instead of reporting completion', async () => {
  await assert.rejects(downloadBrushImages([{ step: 1, qr: '/1.png', fileName: '1.png' }], {
    requestDownload() { throw new Error('Download blocked') }
  }), /Download blocked/)
})
