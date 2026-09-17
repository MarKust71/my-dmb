import { Metadata } from 'next'

import { ProductPageToQrcode } from '@/components/tools/product-page-to-qrcode'
import {
  DmbPageContent,
  DmbPageWrapper,
} from '@/components/ui/dmb-page-wrapper'

import { GeneratorQrPageProps } from './page.types'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Generator QR`,
  }
}

const GeneratorQrPage = async ({ searchParams }: GeneratorQrPageProps) => {
  const sp = await searchParams

  const aboSponsor =
    typeof sp.aboSponsor === 'string' ? sp.aboSponsor : undefined
  const product = typeof sp.product === 'string' ? sp.product : undefined

  return (
    <DmbPageWrapper>
      <DmbPageContent
        // badge="Panel szybkich akcji"
        title="Wygeneruj kod QR"
        description="Link do strony produktu z numerem PA zapraszającego"
      >
        <ProductPageToQrcode aboSponsor={aboSponsor} product={product} />
      </DmbPageContent>
    </DmbPageWrapper>
  )
}

export default GeneratorQrPage
