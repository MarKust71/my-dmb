'use server'

import { prisma } from '@/prisma'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export const getUpcomingEvents = async (): Promise<HomePageEvent[]> => {
  const now = new Date()

  const events = await prisma.event.findMany({
    where: { inactive: false },
    orderBy: { date: 'asc' },
  })

  // Filtrujemy po stronie JS — date+timeEnd musi być w przyszłości
  return events.filter((event) => {
    const [year, month, day] = event.date.split('-').map(Number)
    const [hours, minutes] = event.timeEnd.split(':').map(Number)
    const eventEnd = new Date(year, month - 1, day, hours, minutes)

    return eventEnd > now
  }) as HomePageEvent[]
}
