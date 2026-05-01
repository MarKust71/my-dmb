'use client'

import { motion } from 'framer-motion'

import { HomePageEventCard } from '@/components/home-page/home-page-event-card'

import { UpcomingEventsProps } from './upcoming-events.types'

export const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  if (events.length === 0) return null

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
        {events.map((event, idx) => (
          <HomePageEventCard key={event.id} event={event} index={idx} />
        ))}
      </div>
    </section>
  )
}
