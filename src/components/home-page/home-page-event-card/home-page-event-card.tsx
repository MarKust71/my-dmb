'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
    >
      <Card
        className={cn(
          'h-full overflow-hidden rounded-2xl bg-card/80 shadow-sm ring-1 ring-border transition-all',
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

      <AddToCalendar
        event={toCalendarEvent(event)}
        open={calendarOpen}
        onOpenChange={setCalendarOpen}
        anchor={anchorRef}
      />
    </motion.div>
  )
}
