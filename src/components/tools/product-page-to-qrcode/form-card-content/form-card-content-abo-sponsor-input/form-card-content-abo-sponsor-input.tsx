import { X } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useQrStore } from '@/store/use-qr-store'

import { FormCardContentAboSponsorInputProps } from './form-card-content-abo-sponsor-input.types'

const aboSponsorLabel = 'Twój numer PA'
const aboSponsorPlaceholder = 'np. 8286448'

export const FormCardContentAboSponsorInput = ({
  register,
  setValue,
  errors,
}: FormCardContentAboSponsorInputProps) => {
  const isHydrated = useQrStore((s) => s.isHydrated)
  const isCompact = useQrStore((s) => s.isCompact)

  return (
    <div>
      <Label htmlFor="aboSponsor">{aboSponsorLabel}</Label>

      {isHydrated ? (
        <>
          <div className="relative">
            <Input
              id="aboSponsor"
              type="text"
              inputMode="numeric"
              placeholder={aboSponsorPlaceholder}
              className={`pr-9 ${isCompact ? 'h-9 text-sm' : ''}`}
              {...register('aboSponsor')}
            />

            <button
              type="button"
              onClick={() =>
                setValue('aboSponsor', '', {
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

          {errors.aboSponsor && (
            <p className="mt-1 text-sm text-red-600">
              {errors.aboSponsor.message}
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
