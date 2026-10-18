'use client'

import { useState } from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'

import { AgendaDay } from './agenda-day'
import { AGENDA } from './constants'

export const AgendaDays = () => {
  const isWide = useMediaQuery('(min-width: 640px)')

  // null = użytkownik jeszcze nie klikał: wąskie ekrany zwinięte, szerokie rozwinięte
  const [explicitOpen, setExplicitOpen] = useState<string[] | null>(null)

  const defaultOpen = isWide ? AGENDA.map((day) => day.name) : []
  const openDays = explicitOpen ?? defaultOpen

  const handleToggle = (name: string) => {
    // otwarcie dnia zamyka pozostałe (akordeon)
    setExplicitOpen(
      openDays.includes(name) ? openDays.filter((n) => n !== name) : [name]
    )
  }

  return (
    <div className="flex flex-col gap-8">
      {AGENDA.map((day) => (
        <AgendaDay
          key={day.name}
          day={day}
          isOpen={openDays.includes(day.name)}
          followViewport={explicitOpen === null}
          onToggle={() => handleToggle(day.name)}
        />
      ))}
    </div>
  )
}
