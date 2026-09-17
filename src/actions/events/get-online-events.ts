'use server'

import { prisma } from '@/prisma'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export const getOnlineEvents = async (): Promise<HomePageEvent[]> => {
  const events = await prisma.event.findMany({
    where: { inactive: false, recurrence: { not: null } },
    orderBy: { createdAt: 'asc' },
  })

  return events as HomePageEvent[]
}
