'use client'

import { useEffect, useMemo, useState } from 'react'

import { buildICS } from '@/helpers/build-ics'
import { fmtUtc } from '@/helpers/format-utc'

export type CalendarEvent = {
  start: Date
  end: Date
  title: string
  location: string
  details?: string
  uid?: string
  recurrence?: 'WEEKLY' | 'DAILY' | 'MONTHLY'
}

export const useCalendarLinks = (event: CalendarEvent) => {
  const [icsHref, setIcsHref] = useState<string | null>(null)

  useEffect(() => {
    const ics = buildICS(
      event.start,
      event.end,
      event.title,
      event.location,
      event.details ?? '',
      event.uid,
      event.recurrence
    )
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    setIcsHref(url)

    return () => URL.revokeObjectURL(url)
  }, [
    event.start,
    event.end,
    event.title,
    event.location,
    event.details,
    event.uid,
    event.recurrence,
  ])

  const googleHref = useMemo(() => {
    const dates = `${fmtUtc(event.start)}/${fmtUtc(event.end)}`
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    const params = new URLSearchParams({
      text: event.title,
      dates,
      location: event.location,
      details: event.details ?? '',
      ...(event.recurrence ? { recur: `RRULE:FREQ=${event.recurrence}` } : {}),
    })

    return `${base}&${params.toString()}`
  }, [
    event.start,
    event.end,
    event.title,
    event.location,
    event.details,
    event.recurrence,
  ])

  const icsFilename = `${event.uid ?? event.title.toLowerCase().replace(/\s+/g, '-')}.ics`

  return { icsHref, googleHref, icsFilename }
}
