// Format UTC do ICS/Google: YYYYMMDDTHHMMSSZ
import { pad } from '@/helpers/pad'

export const fmtUtc = (d: Date) => {
  const y = d.getUTCFullYear()
  const m = pad(d.getUTCMonth() + 1)
  const day = pad(d.getUTCDate())
  const hh = pad(d.getUTCHours())
  const mm = pad(d.getUTCMinutes())
  const ss = pad(d.getUTCSeconds())

  return `${y}${m}${day}T${hh}${mm}${ss}Z`
}
