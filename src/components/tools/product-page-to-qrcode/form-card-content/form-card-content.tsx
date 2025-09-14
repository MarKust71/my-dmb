import { ExternalLink, Loader2 } from 'lucide-react'

import { CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { useQrStore } from '@/store/use-qr-store'
import {
  buildUrlWithAbo,
  clearLocalStorage,
  resolveProductInput,
} from '@/components/tools/product-page-to-qrcode/helpers'
import { FormValues } from '@/components/tools/product-page-to-qrcode/product-page-to-qrcode.types'
import { generateQrPngDataUrl } from '@/components/tools/product-page-to-qrcode/helpers/generate-qr-png-data-url'
import { useToast } from '@/components/ui/use-toast'
import { FormCardContentAboSponsorInput } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-content-abo-sponsor-input'
import { FormCardContentLinkUrlInput } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-content-link-url-input'

import { FormCardContentProps } from './form-card-content.types'

const contactAuthorUrl = 'https://mydmb.pl/c/mk'
const contactAuthorLabel = 'Kontakt z autorem generatora'

export const FormCardContent = ({
  handleSubmit,
  register,
  errors,
  reset,
  lsKey,
}: FormCardContentProps) => {
  const { toast } = useToast()

  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const setIsWorking = useQrStore((s) => s.setIsWorking)
  const setGeneratedUrl = useQrStore((s) => s.setGeneratedUrl)
  const setQrDataUrl = useQrStore((s) => s.setQrDataUrl)
  const setSuppressNextSave = useQrStore((s) => s.setSuppressNextSave)
  const resetOutput = useQrStore((s) => s.resetOutput)
  const isWorking = useQrStore((s) => s.isWorking)

  const onSubmit = async (data: FormValues) => {
    setIsWorking(true)
    try {
      const resolved = resolveProductInput(data.linkUrl)
      const finalUrl = buildUrlWithAbo(resolved, data.aboSponsor)

      setGeneratedUrl(finalUrl)
      setQrDataUrl(await generateQrPngDataUrl(finalUrl))

      if (/^\d{4,6}$/.test(data.linkUrl.trim())) {
        toast({
          title: 'Rozpoznano kod produktu',
          description: `Zbudowano adres: ${resolved}`,
        })
      } else if (resolved !== data.linkUrl.trim()) {
        toast({
          title: 'Znormalizowano adres',
          description: 'Usunięto fragment ścieżki pomiędzy domeną a "/p/".',
        })
      }

      toast({
        title: 'Sukces',
        description: 'Link i kod QR zostały wygenerowane.',
      })
    } catch {
      toast({
        title: 'Błąd',
        description: 'Nie udało się wygenerować linku lub QR.',
        variant: 'destructive',
      })
    } finally {
      setIsWorking(false)
    }
  }

  return (
    <CardContent className={`${isCompact ? 'p-2' : 'p-4'}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`grid ${isCompact ? 'gap-3' : 'gap-4'}`}
      >
        <FormCardContentAboSponsorInput register={register} errors={errors} />

        <FormCardContentLinkUrlInput register={register} errors={errors} />

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

        {isHydrated ? (
          <div className="flex justify-center">
            <a
              href={contactAuthorUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline hover:text-blue-700`}
            >
              {contactAuthorLabel}
              <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />

            <span>Wczytywanie zapisanych wartości…</span>
          </div>
        )}
      </form>
    </CardContent>
  )
}
