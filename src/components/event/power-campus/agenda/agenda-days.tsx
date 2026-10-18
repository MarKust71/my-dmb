'use client'

import { useState } from 'react'

import { AgendaDay } from './agenda-day'
import { AGENDA } from './constants'

export const AgendaDays = () => {
  // tylko jeden dzień rozwinięty naraz (akordeon)
  const [openDay, setOpenDay] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-8">
      {AGENDA.map((day) => (
        <AgendaDay
          key={day.name}
          day={day}
          isOpen={openDay === day.name}
          onToggle={() =>
            setOpenDay((prev) => (prev === day.name ? null : day.name))
          }
        />
      ))}
    </div>
  )
}
