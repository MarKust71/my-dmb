import { Metadata } from 'next'

import { ProductPageToQrcode } from '@/components/tools/product-page-to-qrcode'
import {
  DmbPageContent,
  DmbPageWrapper,
} from '@/components/ui/dmb-page-wrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Generator QR`,
  }
}

const GeneratorQrPage = () => {
  return (
    <DmbPageWrapper>
      <DmbPageContent
        // badge="Panel szybkich akcji"
        title="Wygeneruj kod QR"
        description="Link do strony produktu z numerem PA zapraszającego"
      >
        <ProductPageToQrcode />
      </DmbPageContent>
    </DmbPageWrapper>
  )
}

export default GeneratorQrPage
