import { TimeLeft } from '@/helpers/diff.types'

export function diff(now: Date, target: Date): TimeLeft {
  const ms = Math.max(0, target.getTime() - now.getTime())
  const s = Math.floor(ms / 1000)
  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60

  return { days, hours, minutes, seconds }
}
