'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

import { TimeLeft } from '@/helpers/diff.types'
import { diff } from '@/helpers/diff'
import { TimeBox } from '@/components/time-box'
import { Sep } from '@/components/sep'

/**
 * Odlicza do 2025-10-10 19:00 (czas lokalny użytkownika).
 */
// 10 paź 2025, 19:00 czasu PL (CEST = +02:00 w tym dniu)
const TARGET = new Date('2025-10-10T19:00:00+02:00')

const pad = (n: number) => n.toString().padStart(2, '0')

export const PowerCampusCountdownBackdrop = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const raf = useRef<number | null>(null)

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

      {/* LICZNIK NA DOLE */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 flex items-end justify-center px-4"
        aria-live="polite"
      >
        <div className="pointer-events-auto flex flex-col items-center gap-2 rounded-2xl bg-black/55 p-3 backdrop-blur md:gap-3 md:px-4 md: pb-0">
          {isOver ? (
            <span className="text-center text-base font-semibold tracking-wide text-yellow-300 md:text-lg">
              Wydarzenie właśnie wystartowało! 🎉
            </span>
          ) : (
            <>
              {/* NAGŁÓWEK */}
              <span className="text-xs font-medium tracking-wide text-yellow-200/90 md:text-sm uppercase">
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
            </>
          )}
        </div>
      </div>
    </main>
  )
}
