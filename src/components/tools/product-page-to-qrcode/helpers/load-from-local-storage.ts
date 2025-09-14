import { FormValues } from '@/components/tools/product-page-to-qrcode'

export function loadFromLocalStorage(
  lsKey: string
): Partial<FormValues> | undefined {
  if (typeof window === 'undefined') return undefined

  try {
    const raw = window.localStorage.getItem(lsKey)
    if (!raw) return undefined
    return JSON.parse(raw) as FormValues
  } catch {}

  return undefined
}
