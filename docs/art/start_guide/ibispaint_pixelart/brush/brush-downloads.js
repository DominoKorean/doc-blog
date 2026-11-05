export function getDownloadMode(device) {
  if (!device) return 'zip'
  const mobile = device.userAgentData?.mobile || /Android|iPhone|iPad|iPod/i.test(device.userAgent || '')
  const iPad = device.platform === 'MacIntel' && device.maxTouchPoints > 1
  return mobile || iPad ? 'images' : 'zip'
}

export async function downloadBrushImages(brushes, {
  requestDownload,
  onProgress = () => {},
  signal,
  wait = () => new Promise(resolve => setTimeout(resolve, 700))
}) {
  const ordered = [...brushes].sort((a, b) => a.step - b.step)
  let requested = 0
  for (const brush of ordered) {
    if (signal?.aborted) break
    requestDownload({
      qr: brush.qr,
      fileName: `${String(brush.step).padStart(2, '0')}-${brush.fileName}`
    })
    onProgress(++requested)
    if (requested < ordered.length) await wait()
  }
  return requested
}
