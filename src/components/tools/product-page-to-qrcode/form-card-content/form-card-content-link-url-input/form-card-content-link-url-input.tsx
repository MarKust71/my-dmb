import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useQrStore } from '@/store/use-qr-store'

import { FormCardContentLinkUrlInputProps } from './form-card-content-link-url-input.types'

const linkUrlLabel = 'Link do strony produktu ALBO kod produktu (tylko cyfry)'
const linkUrlPlaceholder = 'wklej tu adres strony ALBO wpisz kod produktu'

export const FormCardContentLinkUrlInput = ({
  register,
  errors,
}: FormCardContentLinkUrlInputProps) => {
  const isHydrated = useQrStore((s) => s.isHydrated)
  const isCompact = useQrStore((s) => s.isCompact)

  return (
    <div>
      <Label htmlFor="linkUrl">{linkUrlLabel}</Label>

      {isHydrated ? (
        <>
          <Input
            id="linkUrl"
            type="text"
            placeholder={linkUrlPlaceholder}
            className={`${isCompact ? 'h-9 text-sm' : ''}`}
            {...register('linkUrl')}
          />

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
