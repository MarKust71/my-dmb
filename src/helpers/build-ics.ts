// Budowa pliku ICS
import { fmtUtc } from '@/helpers/format-utc'
import { icsEscape } from '@/helpers/ics-escape'

export const buildICS = (
  eventStart: Date,
  eventEnd: Date,
  calTitle: string,
  calLocation: string,
  calDetails: string,
  uid?: string
) => {
  const dtstamp = fmtUtc(new Date())
  const dtstart = fmtUtc(eventStart)
  const dtend = fmtUtc(eventEnd)
  const eventUid = uid ?? `event-${dtstart}@mydmb.app`

  // CRLF zgodnie ze specyfikacją
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'PRODID:-//dMb//Events//PL',
    'BEGIN:VEVENT',
    `UID:${eventUid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${icsEscape(calTitle)}`,
    `LOCATION:${icsEscape(calLocation)}`,
    `DESCRIPTION:${icsEscape(calDetails)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  return lines.join('\r\n')
}
