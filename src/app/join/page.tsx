import { Metadata } from 'next'

import { LinkCtaButton } from '@/components/join/link-cta-button'
import {
  DmbPageContent,
  DmbPageWrapper,
} from '@/components/ui/dmb-page-wrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Dołącz`,
  }
}

const ABO_SPONSOR = process.env.ABO_SPONSOR
const ABO_SPONSOR_LIFELINE = process.env.ABO_SPONSOR_LIFELINE

const URL_LIFELINE = `https://www.amway.pl/pl/?opt=2&aboSponsor=${ABO_SPONSOR_LIFELINE}`
const URL_PARTNER = `https://www.amway.pl/pl/?opt=2&aboSponsor=${ABO_SPONSOR}`
const URL_CLIENT = `https://www.amway.pl/pl/?opt=1&aboSponsor=${ABO_SPONSOR}`

const JoinPage = async () => {
  return (
    <DmbPageWrapper>
      <DmbPageContent
        // badge="Panel szybkich akcji"
        title="Wybierz swoją własną drogę"
        description="Trzy najważniejsze łącza w jednym miejscu"
        showLogo
      >
        <section className="grid gap-5 sm:grid-cols-2">
          <LinkCtaButton
            label="Dołącz jako PARTNER"
            description="Wybierasz start w swoim własnym tempie"
            href={URL_PARTNER}
          />

          <LinkCtaButton
            label="Dołącz jako KLIENT"
            description="Obserwujesz i testujesz produkty"
            href={URL_CLIENT}
          />

          <div className="sm:col-span-2">
            <LinkCtaButton
              label="Dołącz w LINII ŻYCIA"
              description="Wybierasz start profesjonalny, natychmiastową pomoc i najszybsze efekty"
              href={URL_LIFELINE}
              featured
              disabled
            />
          </div>
        </section>

        <footer className="mt-10 text-xs text-muted-foreground">
          Tip: łącza otworzą się w nowym oknie. Zawsze możesz tu wrócić i wybrać
          lepszy wartiant.
        </footer>
      </DmbPageContent>
    </DmbPageWrapper>
  )
}

export default JoinPage
