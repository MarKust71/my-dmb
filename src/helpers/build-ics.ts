// Budowa pliku ICS
import { fmtUtc } from '@/helpers/format-utc'
import { icsEscape } from '@/helpers/ics-escape'
import { pad } from '@/helpers/pad'

const fmtDate = (d: Date) => {
  const y = d.getFullYear()
  const m = pad(d.getMonth() + 1)
  const day = pad(d.getDate())

  return `${y}${m}${day}`
}

export const buildICS = (
  eventStart: Date,
  eventEnd: Date,
  calTitle: string,
  calLocation: string,
  calDetails: string,
  uid?: string,
  recurrence?: 'WEEKLY' | 'DAILY' | 'MONTHLY',
  allDay?: boolean
) => {
  const dtstamp = fmtUtc(new Date())
  const eventUid = uid ?? `event-${fmtUtc(eventStart)}@mydmb.app`

  const dtstart = allDay
    ? `DTSTART;VALUE=DATE:${fmtDate(eventStart)}`
    : `DTSTART:${fmtUtc(eventStart)}`

  const dtend = allDay
    ? `DTEND;VALUE=DATE:${fmtDate(eventEnd)}`
    : `DTEND:${fmtUtc(eventEnd)}`

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'PRODID:-//dMb//Events//PL',
    'BEGIN:VEVENT',
    `UID:${eventUid}`,
    `DTSTAMP:${dtstamp}`,
    dtstart,
    dtend,
    `SUMMARY:${icsEscape(calTitle)}`,
    `LOCATION:${icsEscape(calLocation)}`,
    `DESCRIPTION:${icsEscape(calDetails)}`,
    ...(recurrence ? [`RRULE:FREQ=${recurrence}`] : []),
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  return lines.join('\r\n')
}
