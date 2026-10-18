import Image from 'next/image'

import DmbLogoImage from '@/assets/images/dmb-logo.png'
import { DmbPageWrapper } from '@/components/ui/dmb-page-wrapper'

import { AgendaDays } from './agenda-days'
import { AGENDA_EVENT } from './constants'
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

          <AgendaDays />
        </div>
      </DmbPageWrapper>
    </div>
  )
}
