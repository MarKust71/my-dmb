import QRCode from 'qrcode'

export async function generateQrPngDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 640,
  })
}
