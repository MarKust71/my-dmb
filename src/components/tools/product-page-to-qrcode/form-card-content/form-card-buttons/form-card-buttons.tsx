import { Button } from '@/components/ui/button'
import {
  buildAmwaySearchUrl,
  clearLocalStorage,
} from '@/components/tools/product-page-to-qrcode/helpers'
import { Skeleton } from '@/components/ui/skeleton'
import { useQrStore } from '@/store/use-qr-store'
import { useToast } from '@/components/ui/use-toast'

import { FormCardButtonsProps } from './form-card-buttons.types'

export const FormCardButtons = ({
  reset,
  lsKey,
  linkUrl,
}: FormCardButtonsProps) => {
  const { toast } = useToast()

  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const setSuppressNextSave = useQrStore((s) => s.setSuppressNextSave)
  const resetOutput = useQrStore((s) => s.resetOutput)
  const isWorking = useQrStore((s) => s.isWorking)

  const handleClear = () => {
    setSuppressNextSave(true) // nie zapisuj pustych po reset
    reset({ aboSponsor: '', linkUrl: '' })
    resetOutput()
    clearLocalStorage(lsKey) // czyścimy LS TYLKO tutaj
    toast({
      title: 'Wyczyszczono',
      description: 'Formularz został wyczyszczony.',
    })
  }

  const handleSearch = () => {
    window.open(buildAmwaySearchUrl(linkUrl), '_blank', 'noopener,noreferrer')
  }

  const buttonClassName = isCompact ? 'h-9 px-3 text-sm' : ''
  const skeletonClassName = `${isCompact ? 'h-9 w-28' : 'h-10 w-32'} rounded-xl`
  const gapClassName = isCompact ? 'gap-2' : 'gap-3'

  return (
    <>
      {/* Mobile: Wyczyść + Generuj w jednej linii, Wyszukaj poniżej po lewej */}
      <div className={`flex flex-col sm:hidden ${gapClassName}`}>
        {isHydrated ? (
          <>
            <div
              className={`flex items-center justify-between ${gapClassName}`}
            >
              <Button
                type="button"
                variant="outline"
                className={buttonClassName}
                onClick={handleClear}
              >
                Wyczyść
              </Button>

              <Button
                type="submit"
                disabled={isWorking}
                className={buttonClassName}
              >
                {isWorking ? 'Przetwarzanie…' : 'Generuj link i QR'}
              </Button>
            </div>

            <Button
              type="button"
              variant="outline"
              className={`w-fit ${buttonClassName}`}
              onClick={handleSearch}
            >
              Wyszukaj w Amway
            </Button>
          </>
        ) : (
          <>
            <div
              className={`flex items-center justify-between ${gapClassName}`}
            >
              <Skeleton className={skeletonClassName} />
              <Skeleton className={skeletonClassName} />
            </div>

            <Skeleton className={skeletonClassName} />
          </>
        )}
      </div>

      {/* Desktop: wszystkie trzy przyciski w jednej linii */}
      <div
        className={`hidden items-center justify-between sm:flex ${gapClassName}`}
      >
        {isHydrated ? (
          <>
            <div className={`flex items-center ${gapClassName}`}>
              <Button
                type="button"
                variant="outline"
                className={buttonClassName}
                onClick={handleClear}
              >
                Wyczyść
              </Button>

              <Button
                type="button"
                variant="outline"
                className={buttonClassName}
                onClick={handleSearch}
              >
                Wyszukaj w Amway
              </Button>
            </div>

            <Button
              type="submit"
              disabled={isWorking}
              className={buttonClassName}
            >
              {isWorking ? 'Przetwarzanie…' : 'Generuj link i QR'}
            </Button>
          </>
        ) : (
          <>
            <Skeleton className={skeletonClassName} />
            <Skeleton className={skeletonClassName} />
          </>
        )}
      </div>
    </>
  )
}
