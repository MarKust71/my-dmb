export function clearLocalStorage(lsKey: string) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.removeItem(lsKey)
  } catch {}
}
