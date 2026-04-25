'use client'

import { motion } from 'framer-motion'

import { HomePageEvent } from '@/components/home-page/home-page-event.types'
import { HomePageEventCard } from '@/components/home-page/home-page-event-card'

import { UPCOMING_EVENTS } from './upcoming-events.constants'

const isInactive = (event: HomePageEvent): boolean => {
  if (event.inactive !== undefined) return event.inactive

  const [year, month, day] = event.date.split('-').map(Number)
  const [hours, minutes] = event.timeEnd.split(':').map(Number)
  const eventEnd = new Date(year, month - 1, day, hours, minutes)

  return new Date() > eventEnd
}

export const UpcomingEvents = () => {
  const activeEvents = UPCOMING_EVENTS.filter((event) => !isInactive(event))

  if (activeEvents.length === 0) return null

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 flex items-center gap-3"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Nadchodzące wydarzenia
        </h2>

        <div className="h-px flex-1 bg-border" />
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {activeEvents.map((event, idx) => (
          <HomePageEventCard key={event.id} event={event} index={idx} />
        ))}
      </div>
    </section>
  )
}
