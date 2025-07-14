import { Button } from '@/components/ui/button'
import { useMraFlyerStore } from '@/store/mra-flyer'
import { cn } from '@/lib/utils'
import { RegisterButton } from '@/components/products/mra/flyer/register-button'
import { ShowQrCode } from '@/components/products/mra/flyer/show-qr-code'

export const MenuButton = () => {
  const { menuOpen, setMenuOpen } = useMraFlyerStore()

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
        <div
          className={cn(
            'flex flex-col items-end space-y-2 transform transition-all duration-300',
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <RegisterButton />

          <ShowQrCode />

          <Button
            onClick={() => setMenuOpen(false)}
            className="rounded-full shadow bg-gray-500 hover:bg-gray-600"
          >
            &#x2715;
          </Button>
        </div>

        {!menuOpen && (
          <Button
            onClick={() => setMenuOpen(true)}
            className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 w-14 h-14 text-2xl font-bold"
          >
            &#9776;
          </Button>
        )}
      </div>
    </>
  )
}
