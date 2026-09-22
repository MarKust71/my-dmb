import { useState } from 'react'
import { Info, X } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useQrStore } from '@/store/use-qr-store'

import { FormCardContentLinkUrlInputProps } from './form-card-content-link-url-input.types'

const linkUrlLabel = 'Link do strony produktu ALBO nr katalogowy (tylko cyfry)'
const linkUrlPlaceholder = 'wklej tu adres strony ALBO wpisz nr katalogowy'
const linkUrlInfo =
  'Numer katalogowy znajdziesz w sklepie Amway. Spróbuj wpisać dowolny tekst i użyć „Wyszukaj w Amway”. Zobaczysz wszystkie produkty, dla których zostanie odnalezione którekolwiek z wpisanych słów. Jeśli chcesz wyszukać dokładnie tekst składający się z kilku słów - zamknij go w cudzysłów. Później skopiuj numer albo adres strony produktu i wklej go w polu generatora.'

export const FormCardContentLinkUrlInput = ({
  register,
  setValue,
  errors,
}: FormCardContentLinkUrlInputProps) => {
  const isHydrated = useQrStore((s) => s.isHydrated)
  const isCompact = useQrStore((s) => s.isCompact)
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  return (
    <div>
      <Label htmlFor="linkUrl">
        {linkUrlLabel}

        <button
          type="button"
          onClick={() => setIsInfoOpen(true)}
          aria-label="Więcej informacji"
          className="ml-1 align-super text-muted-foreground hover:text-foreground"
        >
          <Info className="inline h-3 w-3" />
        </button>
      </Label>

      <Dialog open={isInfoOpen} onOpenChange={setIsInfoOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wskazówka</DialogTitle>
          </DialogHeader>

          <DialogDescription>{linkUrlInfo}</DialogDescription>
        </DialogContent>
      </Dialog>

      {isHydrated ? (
        <>
          <div className="relative">
            <Input
              id="linkUrl"
              type="text"
              placeholder={linkUrlPlaceholder}
              className={`pr-9 ${isCompact ? 'h-9 text-sm' : ''}`}
              {...register('linkUrl')}
            />

            <button
              type="button"
              onClick={() =>
                setValue('linkUrl', '', {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
              aria-label="Wyczyść pole"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {errors.linkUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.linkUrl.message}
            </p>
          )}
        </>
      ) : (
        <Skeleton
          className={`${isCompact ? 'h-9' : 'h-10'} w-full rounded-xl`}
        />
      )}
    </div>
  )
}
