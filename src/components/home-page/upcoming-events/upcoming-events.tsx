'use client'

import { motion } from 'framer-motion'

import { UpcomingEventCard } from './upcoming-event-card'
import { UPCOMING_EVENTS } from './upcoming-events.constants'

export const UpcomingEvents = () => {
  if (UPCOMING_EVENTS.length === 0) return null

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
        {UPCOMING_EVENTS.map((event, idx) => (
          <UpcomingEventCard key={event.id} event={event} index={idx} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 mb-10 flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-border" />
      </motion.div>
    </section>
  )
}
