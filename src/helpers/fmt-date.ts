import { pad } from '@/helpers/pad'

export const fmtDate = (d: Date) => {
  const y = d.getFullYear()
  const m = pad(d.getMonth() + 1)
  const day = pad(d.getDate())

  return `${y}${m}${day}`
}
