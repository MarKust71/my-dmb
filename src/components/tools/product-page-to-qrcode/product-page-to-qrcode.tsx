'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Card } from '@/components/ui/card'
import { useQrStore } from '@/store/use-qr-store'

import { FormCardHeader } from './form-card-header'
import { FormCardContent } from './form-card-content'
import { GeneratedUrlCard } from './generated-url-card'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers'
import { FormSchema } from './schema/form-schema'
import { FormValues } from './product-page-to-qrcode.types'

// ---- localStorage helpers ---------------------------------------------------
const LS_KEY = 'abo-link-form'

// ---- Component --------------------------------------------------------------
export function ProductPageToQrcode() {
  // selecty ze store (unikamy rerenderów na każdy stan dzięki selektorom)
  const generatedUrl = useQrStore((s) => s.generatedUrl)
  const isCompact = useQrStore((s) => s.isCompact)
  const isHydrated = useQrStore((s) => s.isHydrated)
  const suppressNextSave = useQrStore((s) => s.suppressNextSave)
  const setIsCompact = useQrStore((s) => s.setIsCompact)
  const setIsHydrated = useQrStore((s) => s.setIsHydrated)
  const setSuppressNextSave = useQrStore((s) => s.setSuppressNextSave)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { aboSponsor: '', linkUrl: '' },
    mode: 'onBlur',
  })

  // 1) Hydratacja z localStorage + auto-compact na mobile
  useEffect(() => {
    const stored = loadFromLocalStorage(LS_KEY)
    if (stored) reset(stored)

    // ustaw compact z media query tylko, gdy persist nie zdążył nadpisać
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(max-width: 767px)')
      const hydrated = (useQrStore as any).persist?.hasHydrated?.() ?? false

      if (!hydrated) setIsCompact(mq.matches)
    }

    setIsHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 2) Auto-zapis do localStorage przy zmianach pól — ale dopiero po hydratacji
  const values = watch()
  useEffect(() => {
    if (!isHydrated) return

    if (suppressNextSave) {
      setSuppressNextSave(false)

      return
    }

    saveToLocalStorage(values, LS_KEY)
  }, [values, isHydrated, suppressNextSave, setSuppressNextSave])

  return (
    <div
      className={`theme-amway ${isCompact ? 'am-compact' : ''} mx-auto max-w-2xl ${isCompact ? 'p-1' : 'p-2'}`}
    >
      <Card>
        <FormCardHeader />

        <FormCardContent
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          reset={reset}
          lsKey={LS_KEY}
        />
      </Card>

      {generatedUrl && <GeneratedUrlCard values={values} />}
    </div>
  )
}
