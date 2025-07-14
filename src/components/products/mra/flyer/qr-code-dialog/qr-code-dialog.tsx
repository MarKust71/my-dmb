import Image from 'next/image'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useMraFlyerStore } from '@/store/mra-flyer'

export const QrCodeDialog = () => {
  const { qrOpen, setQrOpen } = useMraFlyerStore()

  return (
    <Dialog open={qrOpen} onOpenChange={setQrOpen}>
      <DialogContent className="p-4 flex flex-col items-center">
        <Image
          src="/img/mra/mra-flyer-qr.png"
          alt="Kod QR"
          width={192}
          height={192}
          className="w-48 h-48"
        />
      </DialogContent>
    </Dialog>
  )
}
