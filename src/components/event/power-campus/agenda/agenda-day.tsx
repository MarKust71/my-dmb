'use client'

import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

import { AgendaDay as AgendaDayData } from './constants'

type AgendaDayProps = {
  day: AgendaDayData
  isOpen: boolean
  onToggle: () => void
}

export const AgendaDay = ({ day, isOpen, onToggle }: AgendaDayProps) => {
  const contentId = useId()

  return (
    <section className="overflow-hidden rounded-2xl border border-primary/30 bg-card/80 shadow-lg shadow-black/20">
      <h2 className="text-lg font-semibold tracking-wide">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-3 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent px-5 py-3 text-left transition-colors hover:from-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:px-6"
        >
          <span>{day.name}</span>

          <span className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              {day.date}
            </span>

            <ChevronDown
              aria-hidden
              className={cn(
                'h-5 w-5 text-primary transition-transform duration-300',
                isOpen && 'rotate-180'
              )}
            />
          </span>
        </button>
      </h2>

      <div
        id={contentId}
        className={cn(
          'grid transition-[grid-template-rows,visibility] duration-300 ease-in-out',
          isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
        )}
      >
        <ul className="min-h-0 overflow-hidden">
          {day.items.map((item, index) => (
            <li
              key={`${item.time}-${index}`}
              className={cn(
                'grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4 border-l-2 border-t border-border border-l-transparent px-5 py-3 text-sm sm:grid-cols-[9rem_1fr] sm:px-6 sm:text-base',
                item.highlight &&
                  'border-l-primary bg-primary/10 font-semibold',
                item.muted && 'text-muted-foreground'
              )}
            >
              <span
                className={cn(
                  'tabular-nums',
                  item.highlight ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.time}
              </span>

              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
