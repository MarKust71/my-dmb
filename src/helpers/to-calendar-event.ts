import { parseDateOrWeekday } from '@/helpers/next-weekday'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'
import { isMultiDay } from '@/helpers/is-multi-day'

export const toCalendarEvent = (event: HomePageEvent) => {
  const baseDate = parseDateOrWeekday(event.dateStart) ?? new Date()

  if (isMultiDay(event.dateStart, event.dateEnd)) {
    // Wydarzenie całodniowe (wielodniowe)
    // start = data początku (północ lokalnie)
    const start = new Date(`${event.dateStart}T00:00:00`)

    // end = dzień po dateEnd (konwencja iCal: DTEND jest exclusive)
    const endDate = new Date(`${event.dateEnd}T00:00:00`)
    endDate.setDate(endDate.getDate() + 1)

    return {
      uid: event.id,
      title: event.title,
      location: event.location ?? '',
      details: `Rozpoczęcie: godz. ${event.timeStart}`,
      start,
      end: endDate,
      allDay: true,
      recurrence: event.recurrence,
    }
  }

  // Wydarzenie jednodniowe — bez zmian
  const [startH, startM] = event.timeStart.split(':').map(Number)
  const [endH, endM] = event.timeEnd.split(':').map(Number)

  const start = new Date(baseDate)
  start.setHours(startH, startM, 0, 0)

  const end = new Date(baseDate)
  end.setHours(endH, endM, 0, 0)

  return {
    uid: event.id,
    title: event.title,
    location: event.location ?? '',
    details: '',
    start,
    end,
    allDay: false,
    recurrence: event.recurrence,
  }
}
