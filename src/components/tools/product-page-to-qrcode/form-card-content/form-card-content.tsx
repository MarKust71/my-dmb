import { CardContent } from '@/components/ui/card'
import { useQrStore } from '@/store/use-qr-store'
import {
  buildUrlWithAbo,
  resolveProductInput,
} from '@/components/tools/product-page-to-qrcode/helpers'
import { FormValues } from '@/components/tools/product-page-to-qrcode/product-page-to-qrcode.types'
import { generateQrPngDataUrl } from '@/components/tools/product-page-to-qrcode/helpers/generate-qr-png-data-url'
import { useToast } from '@/components/ui/use-toast'
import { FormCardContentAboSponsorInput } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-content-abo-sponsor-input'
import { FormCardContentLinkUrlInput } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-content-link-url-input'
import { FormCardButtons } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-buttons'
import { FormCardContactAuthor } from '@/components/tools/product-page-to-qrcode/form-card-content/form-card-contact-author'

import { FormCardContentProps } from './form-card-content.types'

export const FormCardContent = ({
  handleSubmit,
  register,
  errors,
  reset,
  lsKey,
}: FormCardContentProps) => {
  const { toast } = useToast()

  const isCompact = useQrStore((s) => s.isCompact)
  const setIsWorking = useQrStore((s) => s.setIsWorking)
  const setGeneratedUrl = useQrStore((s) => s.setGeneratedUrl)
  const setQrDataUrl = useQrStore((s) => s.setQrDataUrl)

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

        <FormCardButtons reset={reset} lsKey={lsKey} />

        <FormCardContactAuthor />
      </form>
    </CardContent>
  )
}
