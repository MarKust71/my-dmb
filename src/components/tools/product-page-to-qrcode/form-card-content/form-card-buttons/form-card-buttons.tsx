import { Button } from '@/components/ui/button'
import { clearLocalStorage } from '@/components/tools/product-page-to-qrcode/helpers'
import { Skeleton } from '@/components/ui/skeleton'
import { useQrStore } from '@/store/use-qr-store'
import { useToast } from '@/components/ui/use-toast'

import { FormCardButtonsProps } from './form-card-buttons.types'

export const FormCardButtons = ({ reset, lsKey }: FormCardButtonsProps) => {
  const { toast } = useToast()

  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const setSuppressNextSave = useQrStore((s) => s.setSuppressNextSave)
  const resetOutput = useQrStore((s) => s.resetOutput)
  const isWorking = useQrStore((s) => s.isWorking)

  return (
    <div
      className={`flex items-center justify-between ${isCompact ? 'gap-2' : 'gap-3'}`}
    >
      {isHydrated ? (
        <>
          <Button
            type="button"
            variant="outline"
            className={`${isCompact ? 'h-9 px-3 text-sm' : ''}`}
            onClick={() => {
              setSuppressNextSave(true) // nie zapisuj pustych po reset
              reset({ aboSponsor: '', linkUrl: '' })
              resetOutput()
              clearLocalStorage(lsKey) // czyścimy LS TYLKO tutaj
              toast({
                title: 'Wyczyszczono',
                description: 'Formularz został wyczyszczony.',
              })
            }}
          >
            Wyczyść
          </Button>

          <Button
            type="submit"
            disabled={isWorking}
            className={`${isCompact ? 'h-9 px-3 text-sm' : ''}`}
          >
            {isWorking ? 'Przetwarzanie…' : 'Generuj link i QR'}
          </Button>
        </>
      ) : (
        <>
          <Skeleton
            className={`${isCompact ? 'h-9 w-28' : 'h-10 w-32'} rounded-xl`}
          />

          <Skeleton
            className={`${isCompact ? 'h-9 w-28' : 'h-10 w-32'} rounded-xl`}
          />
        </>
      )}
    </div>
  )
}
