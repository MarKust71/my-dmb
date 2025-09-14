import { FormValues } from '@/components/tools/product-page-to-qrcode'

export function saveToLocalStorage(values: Partial<FormValues>, lsKey: string) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(lsKey, JSON.stringify(values))
  } catch {}
}
