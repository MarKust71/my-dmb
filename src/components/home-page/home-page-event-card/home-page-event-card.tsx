'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, CalendarPlus, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { AddToCalendar } from '@/components/add-to-calendar'
import { HomePageEvent } from '@/components/home-page/home-page-event.types'

type Props = {
  event: HomePageEvent
  index: number
}

const formatDate = (iso: string): string => {
  const date = new Date(`${iso}T12:00:00`)

  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
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

const CardContent = ({ event }: { event: HomePageEvent }) => (
  <div className="flex h-full flex-row items-stretch">
    {/* Dane eventu — lewa strona */}
    <div className="flex flex-1 flex-col justify-start gap-2 px-5 py-4">
      <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
        {event.title}
      </h3>

      <div className="mt-1 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span>
            {formatDate(event.date) === 'Invalid Date'
              ? event.date
              : formatDate(event.date)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" />
          <span>
            {event.timeStart} – {event.timeEnd}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {/* Ikona kalendarza — widoczna tylko gdy brak href */}
      {!event.href && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-primary/60">
          <CalendarPlus className="h-3.5 w-3.5" />
          <span>Dodaj do kalendarza</span>
        </div>
      )}
    </div>

    {/* Grafika — prawa strona */}
    <div className="relative w-28 shrink-0 sm:w-36">
      {event.image ? (
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 112px, 144px"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted/60">
          <CalendarDays className="h-8 w-8 text-muted-foreground/40" />
        </div>
      )}
    </div>
  </div>
)

export const HomePageEventCard = ({ event, index }: Props) => {
  const cardClassName = [
    'h-full overflow-hidden rounded-2xl bg-card/80 shadow-sm ring-1 ring-border transition-all',
    'hover:bg-card hover:shadow-md',
    'cursor-pointer',
  ].join(' ')

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
            <CardContent event={event} />
          </Link>
        </Card>
      ) : (
        // Karta otwierająca drawer z wyborem kalendarza
        <AddToCalendar
          event={toCalendarEvent(event)}
          trigger={
            <Card className={cardClassName}>
              <CardContent event={event} />
            </Card>
          }
        />
      )}
    </motion.div>
  )
}
