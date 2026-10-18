'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ListChecks } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { AddToCalendar } from '@/components/add-to-calendar'
import { cn } from '@/lib/utils'
import { toCalendarEvent } from '@/helpers/to-calendar-event'

import { HomePageEventCardProps } from './home-page-event-card.types'
import { HomePageEventCardContent } from './home-page-event-card-content'

export const HomePageEventCard = ({ event, index }: HomePageEventCardProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const anchorRef = useRef<HTMLElement>(null)

  const handleAddToCalendar = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCalendarOpen(true)
  }

  const agendaHref = event.agendaHref?.trim()

  return (
    <motion.div
      className="flex h-full flex-col gap-2"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
    >
      <Card
        className={cn(
          'flex-1 overflow-hidden rounded-2xl bg-card/80 shadow-sm ring-1 ring-border transition-all',
          'hover:bg-card hover:shadow-md',
          event.href ? 'cursor-pointer' : 'cursor-default'
        )}
      >
        {event.href ? (
          <Link
            href={event.href}
            target="_blank"
            className="flex h-full flex-row items-stretch no-underline [&_*]:no-underline"
          >
            <HomePageEventCardContent
              event={event}
              onAddToCalendar={handleAddToCalendar}
            />
          </Link>
        ) : (
          <HomePageEventCardContent
            event={event}
            onAddToCalendar={handleAddToCalendar}
          />
        )}
      </Card>

      {agendaHref && (
        <Link
          href={agendaHref}
          className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition hover:bg-primary/20"
        >
          <ListChecks className="h-4 w-4" />
          <span>Zobacz agendę</span>
        </Link>
      )}

      <AddToCalendar
        event={toCalendarEvent(event)}
        open={calendarOpen}
        onOpenChangeAction={setCalendarOpen}
        anchor={anchorRef}
      />
    </motion.div>
  )
}
