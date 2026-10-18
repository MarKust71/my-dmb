import Image from 'next/image'

import DmbLogoImage from '@/assets/images/dmb-logo.png'
import { DmbPageWrapper } from '@/components/ui/dmb-page-wrapper'
import { cn } from '@/lib/utils'

import { AGENDA, AGENDA_EVENT } from './constants'
import { PowerCampusLogo } from './power-campus-logo'

export const PowerCampusAgenda = () => {
  return (
    <div className="theme-dmb bg-background text-foreground">
      <DmbPageWrapper>
        <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
          <header className="mb-10 flex flex-col items-center gap-6 sm:mb-14">
            <div className="flex w-full items-center justify-between gap-4">
              <Image
                src={DmbLogoImage}
                alt="dMb Global"
                width={96}
                height={82}
                priority
                className="h-auto w-16 sm:w-24"
              />

              <PowerCampusLogo />
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="text-center">
              <h1 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Agenda
              </h1>

              <p className="mt-3 flex flex-col text-lg font-semibold sm:block sm:text-xl">
                <span>{AGENDA_EVENT.title}</span>
                <span className="hidden sm:inline"> · </span>
                <span>{AGENDA_EVENT.dates}</span>
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {AGENDA_EVENT.location}
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-8">
            {AGENDA.map((day) => (
              <section
                key={day.name}
                className="overflow-hidden rounded-2xl border border-primary/30 bg-card/80 shadow-lg shadow-black/20"
              >
                <h2 className="flex items-baseline justify-between bg-gradient-to-r from-primary/25 via-primary/10 to-transparent px-5 py-3 text-lg font-semibold tracking-wide sm:px-6">
                  <span>{day.name}</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {day.date}
                  </span>
                </h2>

                <ul>
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
                          item.highlight
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        )}
                      >
                        {item.time}
                      </span>

                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </DmbPageWrapper>
    </div>
  )
}
