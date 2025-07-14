import { Button } from '@/components/ui/button'
import { useMraFlyerStore } from '@/store/mra-flyer'

export const ShowQrCode = () => {
  const { setMenuOpen, setQrOpen } = useMraFlyerStore()

  const handleOpenQr = () => {
    setQrOpen(true)
    setMenuOpen(false)
  }

  return (
    <Button
      onClick={handleOpenQr}
      className="rounded-full shadow bg-green-600 hover:bg-green-700"
    >
      Kod QR
    </Button>
  )
}
