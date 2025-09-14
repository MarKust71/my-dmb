import { FormValues } from '../product-page-to-qrcode.types'

export function saveToLocalStorage(values: Partial<FormValues>, lsKey: string) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(lsKey, JSON.stringify(values))
  } catch {}
}
