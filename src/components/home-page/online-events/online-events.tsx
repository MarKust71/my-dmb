'use client'

import { motion } from 'framer-motion'

import { HomePageEventCard } from '@/components/home-page/home-page-event-card'
import { ONLINE_EVENTS } from '@/components/home-page/online-events/online-events.constants'

export const OnlineEvents = () => {
  if (ONLINE_EVENTS.length === 0) return null

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
          Wydarzenia cyklinczne online
        </h2>

        <div className="h-px flex-1 bg-border" />
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ONLINE_EVENTS.map((event, idx) => (
          <HomePageEventCard key={event.id} event={event} index={idx} />
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
