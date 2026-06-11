import { parseDateOrWeekday } from '@/helpers/next-weekday'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export const toCalendarEvent = (event: HomePageEvent) => {
  const baseDate = parseDateOrWeekday(event.dateStart) ?? new Date()

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
    recurrence: event.recurrence,
  }
}
