import Image from 'next/image'
import { Metadata } from 'next'

import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import DmbLogo from '@/assets/images/dmb-logo.png'
import { EventList } from '@/components/ui/lists/event-list/event-list'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `my-dMb App | Events`,
  }
}

const EventsPage = () => {
  return (
    <DashboardWrapper>
      <div className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-10">
          <div className="mb-10 flex justify-center">
            <div className="rounded-2xl bg-card/80 px-7 py-5 shadow-sm ring-1 ring-border">
              <Image
                src={DmbLogo}
                alt="dmb-logo"
                width={150}
                height={150}
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm">
            Panel wydarzeń
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Wydarzenia systemowe
          </h1>

          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Kliknij w kafelek wydarzenia, aby przejść do dedykowanej strony
            lub&nbsp;skopiuj link do spotkania.
          </p>

          {/*<Separator className="mt-6" />*/}
        </header>

        <section className="grid gap-4">
          <EventList />
        </section>
      </div>
    </DashboardWrapper>
  )
}

export default EventsPage
