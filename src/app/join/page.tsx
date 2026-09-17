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

const URL_ONE = 'https://www.amway.pl/pl/?opt=2&aboSponsor=7023833738'
const URL_TWO = 'https://www.amway.pl/pl/?opt=2&aboSponsor=8286448'
const URL_THREE = 'https://www.amway.pl/pl/?opt=1&aboSponsor=8286448'

const JoinPage = async () => {
  return (
    <DmbPageWrapper>
      <DmbPageContent
        badge="Panel szybkich akcji"
        title="Wybierz swoją własną drogę"
        description="Trzy najważniejsze łącza w jednym miejscu"
      >
        <section className="grid gap-5 sm:grid-cols-2">
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

          <div className="sm:col-span-2">
            <LinkCtaButton
              label="Dołącz w LINII ŻYCIA"
              description="Wybierasz start profesjonalny, natychmiastową pomoc i najszybsze efekty"
              href={URL_ONE}
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
