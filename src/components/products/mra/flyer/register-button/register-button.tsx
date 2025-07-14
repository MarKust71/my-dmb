import { Button } from '@/components/ui/button'
import { useMraFlyerStore } from '@/store/mra-flyer'

export const RegisterButton = () => {
  const { setError, setDialogOpen, setMenuOpen } = useMraFlyerStore()

  const handleOpenDialog = () => {
    setDialogOpen(true)
    setError('')
    setMenuOpen(false)
  }

  return (
    <Button
      onClick={handleOpenDialog}
      className="rounded-full shadow bg-blue-600 hover:bg-blue-700"
    >
      Umów test
    </Button>
  )
}
