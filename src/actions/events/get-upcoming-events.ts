'use server'

import { HomePageEvent } from '@/components/home-page/home-page-event.types'
import { prisma } from '@/prisma'

export const getUpcomingEvents = async (): Promise<HomePageEvent[]> => {
  const now = new Date()

  const events = await prisma.event.findMany({
    where: { inactive: false, recurrence: null },
    orderBy: { dateStart: 'asc' },
  })

  // Filtrujemy po stronie JS:
  // - wydarzenia jednodniowe: dateStart + timeEnd
  // - wydarzenia wielodniowe: dateEnd + '23:59:59'
  return events.filter((event) => {
    if (event.dateEnd) {
      const [year, month, day] = event.dateEnd.split('-').map(Number)
      const eventEnd = new Date(year, month - 1, day, 23, 59, 59)

      return eventEnd > now
    }

    const [year, month, day] = event.dateStart.split('-').map(Number)
    const [hours, minutes] = event.timeEnd.split(':').map(Number)
    const eventEnd = new Date(year, month - 1, day, hours, minutes)

    return eventEnd > now
  }) as HomePageEvent[]
}
