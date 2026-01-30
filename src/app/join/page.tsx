import { Metadata } from 'next'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { LinkCtaButton } from '@/components/join/link-cta-button'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Dołącz`,
  }
}

const URL_ONE = 'https://www.amway.pl/pl/?opt=2&aboSponsor=7023833738'
const URL_TWO = 'https://www.amway.pl/pl/?opt=2&aboSponsor=8286448'
const URL_THREE = 'https://www.amway.pl/pl/?opt=1&aboSponsor=8286448'

const JoinPage = async () => {
  return (
    <main className="theme-dmb relative min-h-dvh bg-gradient-to-b from-background to-muted/40">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -z-10',
          'bg-[radial-gradient(900px_circle_at_50%_-200px,hsl(var(--primary)/0.18),transparent_55%)]'
        )}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-10">
          <div className="mb-10 flex justify-center">
            <div className="rounded-2xl bg-card/80 px-7 py-5 shadow-sm ring-1 ring-border">
              <Image
                src="/img/dmb/dmb-global.png"
                alt="dMb Global"
                width={180}
                height={70}
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm">
            Panel szybkich akcji
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Wybierz swoją własną drogę
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Trzy najważniejsze łącza w jednym miejscu
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <LinkCtaButton
              label="Dołącz w LINII ŻYCIA"
              description="Wybierasz start profesjonalny, natychmiastową pomoc i najszybsze efekty"
              href={URL_ONE}
              featured
              disabled
            />
          </div>

          <LinkCtaButton
            label="Dołącz jako PARTNER"
            description="Wybierasz start w swoim własnym tempie"
            href={URL_TWO}
          />

          <LinkCtaButton
            label="Dołącz jako KLIENT"
            description="Obserwujesz i testujesz produkty"
            href={URL_THREE}
          />
        </section>

        <footer className="mt-10 text-xs text-muted-foreground">
          Tip: łącza otworzą się w nowym oknie. Zawsze możesz tu wrócić i wybrać
          lepszy wartiant.
        </footer>
      </div>
    </main>
  )
}

export default JoinPage
