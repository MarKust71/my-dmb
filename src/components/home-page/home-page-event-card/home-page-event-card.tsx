'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { AddToCalendar } from '@/components/add-to-calendar'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'
import { cn } from '@/lib/utils'

import { HomePageEventCardContent } from './home-page-event-card-content'

type Props = {
  event: HomePageEvent
  index: number
}

const toCalendarEvent = (event: HomePageEvent) => {
  const [year, month, day] = event.date.split('-').map(Number)
  const [startH, startM] = event.timeStart.split(':').map(Number)
  const [endH, endM] = event.timeEnd.split(':').map(Number)

  return {
    uid: event.id,
    title: event.title,
    location: event.location ?? '',
    details: '',
    start: new Date(year, month - 1, day, startH, startM),
    end: new Date(year, month - 1, day, endH, endM),
  }
}

export const HomePageEventCard = ({ event, index }: Props) => {
  const cardClassName = cn(
    'h-full overflow-hidden rounded-2xl bg-card/80 shadow-sm ring-1 ring-border transition-all',
    'hover:bg-card hover:shadow-md',
    'cursor-pointer'
  )

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
    >
      {event.href ? (
        // Karta z linkiem
        <Card className={cardClassName}>
          <Link
            href={event.href}
            target="_blank"
            className="flex h-full flex-row items-stretch no-underline [&_*]:no-underline"
          >
            <HomePageEventCardContent event={event} />
          </Link>
        </Card>
      ) : (
        // Karta otwierająca drawer z wyborem kalendarza
        <AddToCalendar
          event={toCalendarEvent(event)}
          trigger={
            <Card className={cardClassName}>
              <HomePageEventCardContent event={event} />
            </Card>
          }
        />
      )}
    </motion.div>
  )
}
