import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useMraFlyerStore } from '@/store/mra-flyer'

const qrUrl = 'https://mydmb.pl/mra/ulotka'
const qrCodeSrc = '/img/mra/mra-flyer-qr.png'

export const QrCodeDialog = () => {
  const { qrOpen, setQrOpen } = useMraFlyerStore()
  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState(false)

  const caption = useMemo(() => {
    if (copied) return 'Link skopiowany do schowka'

    if (isMobile) return 'Dotknij kodu, żeby skopiować link'

    return 'Kliknij kod, żeby skopiować link'
  }, [isMobile, copied])

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Błąd kopiowania:', err)
    }
  }

  return (
    <Dialog open={qrOpen} onOpenChange={setQrOpen}>
      <DialogContent className="p-4 flex flex-col items-center space-y-2">
        <button onClick={handleCopy} className="focus:outline-none">
          <Image
            src={qrCodeSrc}
            alt="Kod QR"
            width={192}
            height={192}
            className="w-48 h-48 hover:opacity-80 transition-opacity mx-auto"
          />

          <div className="text-center">
            <p className="text-sm text-black hover:opacity-80 transition-opacity">
              {caption}
            </p>

            <p className="text-sm text-gray-600 hover:opacity-80 transition-opacity">
              {qrUrl}
            </p>
          </div>
        </button>
      </DialogContent>
    </Dialog>
  )
}
