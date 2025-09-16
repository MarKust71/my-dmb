'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

import { TimeLeft } from '@/helpers/diff.types'
import { diff } from '@/helpers/diff'
import { TimeBox } from '@/components/time-box'
import { Sep } from '@/components/sep'
import { buildICS } from '@/helpers/build-ics'
import { fmtUtc } from '@/helpers/format-utc'
import { pad } from '@/helpers/pad'

/**
 * Odlicza do 2025-10-10 19:00 (czas lokalny użytkownika).
 */
// 10 paź 2025, 19:00 czasu PL (CEST = +02:00 w tym dniu)
const TARGET = new Date('2025-10-10T19:00:00+02:00')

// Dane wydarzenia (dla linków kalendarza)
const CAL_TITLE = 'dMb Global PowerCampus A70'
const CAL_LOCATION = 'Q Hotel Plus, ul. Szwedzka 7, 55-040 Bielany Wrocławskie'
const CAL_DETAILS = 'Trzydniowe wydarzenie (10–12 października 2025).'

// Początek i koniec wydarzenia (PL = +02:00 dla tego terminu)
const EVENT_START = new Date('2025-10-10T19:00:00+02:00')
const EVENT_END = new Date('2025-10-12T15:30:00+02:00') // obejmuje cały 12.10

export const PowerCampusCountdownBackdrop = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const raf = useRef<number | null>(null)

  // Href do ICS (blob) generujemy po stronie klienta
  const [icsHref, setIcsHref] = useState<string | null>(null)

  useEffect(() => {
    let lastTick = 0
    const tick = (t: number) => {
      if (!lastTick || t - lastTick >= 1000) {
        setTimeLeft(diff(new Date(), TARGET))
        lastTick = t
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  useEffect(() => {
    const ics = buildICS(
      EVENT_START,
      EVENT_END,
      CAL_TITLE,
      CAL_LOCATION,
      CAL_DETAILS
    )
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    setIcsHref(url)

    return () => URL.revokeObjectURL(url)
  }, [])

  // Link Google Calendar (UTC, zakres start/end)
  const googleHref = useMemo(() => {
    const dates = `${fmtUtc(EVENT_START)}/${fmtUtc(EVENT_END)}`
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
    const params = new URLSearchParams({
      text: CAL_TITLE,
      dates,
      location: CAL_LOCATION,
      details: CAL_DETAILS,
    })

    return `${base}&${params.toString()}`
  }, [])

  const isOver = useMemo(
    () =>
      timeLeft &&
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0,
    [timeLeft]
  )

  return (
    <main className="relative isolate min-h-svh w-full overflow-hidden bg-black">
      {/* TŁO */}
      <div className="absolute inset-0">
        <Image
          src="/img/event/power-campus-a70.jpeg"
          alt="PowerCampus A70 — Wrocław"
          fill
          priority
          className="object-cover object-[80%_0%] md:object-top"
          sizes="100vw"
          quality={90}
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* LICZNIK + LINKI KALENDARZA */}
      {timeLeft && !isOver && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-6 flex items-end justify-center px-4"
          aria-live="polite"
        >
          <div className="pointer-events-auto flex flex-col items-center gap-0 rounded-2xl bg-black/55 p-3 backdrop-blur md:text-lg md:px-4">
            {isOver ? (
              <span className="text-center text-base font-semibold tracking-wide text-yellow-300 md:text-lg">
                Wydarzenie właśnie wystartowało! 🎉
              </span>
            ) : (
              <>
                {/* NAGŁÓWEK */}
                <span className="text-xs font-extrabold tracking-wide text-yellow-200/90 md:text-sm uppercase">
                  spotykamy się już za
                </span>

                {/* RZĄD Z CZASEM */}
                <div className="flex items-center gap-3 md:gap-4">
                  <TimeBox
                    label="dni"
                    value={timeLeft ? String(timeLeft.days) : '–'}
                  />

                  <Sep />

                  <TimeBox
                    label="godz."
                    value={timeLeft ? pad(timeLeft.hours) : '–'}
                  />

                  <Sep />

                  <TimeBox
                    label="min."
                    value={timeLeft ? pad(timeLeft.minutes) : '–'}
                  />

                  <Sep />

                  <TimeBox
                    label="sek."
                    value={timeLeft ? pad(timeLeft.seconds) : '–'}
                  />
                </div>

                {/* LINKI: Dodaj do kalendarza */}
                {icsHref && (
                  <div className="mt-1 mb-1 flex items-center gap-2">
                    <a
                      href={googleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-black transition hover:bg-yellow-200 md:text-sm text-center"
                    >
                      Dodaj do kalendarza (Google)
                    </a>

                    <a
                      href={icsHref}
                      download="powercampus-2025.ics"
                      className="rounded-full border border-yellow-300/70 px-3 py-1 text-xs font-semibold text-yellow-200 transition hover:bg-yellow-300/10 md:text-sm text-center"
                    >
                      Pobierz ICS (Apple/Outlook)
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
