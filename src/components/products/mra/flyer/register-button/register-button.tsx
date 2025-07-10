import { Button } from '@/components/ui/button'
import { useMraFlyerStore } from '@/store/mra-flyer'

export const RegisterButton = () => {
  const { setError, setDialogOpen } = useMraFlyerStore()

  return (
    <Button
      onClick={() => {
        setDialogOpen(true)
        setError('')
      }}
      className="fixed bottom-4 right-4 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
    >
      Umów test
    </Button>
  )
}
