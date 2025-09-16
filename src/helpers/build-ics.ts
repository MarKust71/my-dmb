// Budowa pliku ICS
import { fmtUtc } from '@/helpers/format-utc'
import { icsEscape } from '@/helpers/ics-escape'

export const buildICS = (
  eventStart: Date,
  eventEnd: Date,
  calTitle: string,
  calLocation: string,
  calDetails: string
) => {
  const dtstamp = fmtUtc(new Date())
  const dtstart = fmtUtc(eventStart)
  const dtend = fmtUtc(eventEnd)
  const uid = `powercampus-a70-${dtstart}@example.local`

  // CRLF zgodnie ze specyfikacją
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'PRODID:-//YourApp//PowerCampus//PL',
    'BEGIN:VEVENT',
    `UID:${uid}`,
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
