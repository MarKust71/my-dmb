'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import { UpcomingEvent } from '../upcoming-events.types'

type Props = {
  event: UpcomingEvent
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

export const UpcomingEventCard = ({ event, index }: Props) => {
  const Wrapper = event.href ? Link : 'div'

  return (
    <motion.div
      className={'h-full'}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
    >
      <Card
        className={[
          'h-full overflow-hidden rounded-2xl bg-card/80 shadow-sm ring-1 ring-border transition-all',
          'hover:bg-card hover:shadow-md',
          event.href ? 'cursor-pointer' : 'cursor-default',
        ].join(' ')}
      >
        <Wrapper
          href={event.href ?? '#'}
          className="flex h-full flex-row items-stretch no-underline"
        >
          {/* Dane eventu — lewa strona */}
          <div className="flex flex-1 flex-col justify-start gap-2 px-5 py-4">
            <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
              {event.title}
            </h3>

            <div className="mt-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 shrink-0" />
                <span>{formatDate(event.date)}</span>
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
              /* Placeholder — do zastąpienia grafiką */
              <div className="flex h-full w-full items-center justify-center bg-muted/60">
                <CalendarDays className="h-8 w-8 text-muted-foreground/40" />
              </div>
            )}
          </div>
        </Wrapper>
      </Card>
    </motion.div>
  )
}
