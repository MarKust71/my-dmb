import { Metadata } from 'next'

import { ProductPageToQrcode } from '@/components/tools/product-page-to-qrcode'
import { DmbLogo } from '@/components/ui/dmb-logo'
import { DmbPageWrapper } from '@/components/ui/dmb-page-wrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Generator QR`,
  }
}

const GeneratorQrPage = () => {
  return (
    <DmbPageWrapper>
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-10">
          <div className="mb-10 flex justify-center">
            <DmbLogo size={150} />
          </div>

          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm">
            Panel szybkich akcji
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Wygeneruj kod QR
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Link do strony produktu z numerem PA zapraszającego
          </p>
        </header>

        <ProductPageToQrcode />
      </div>
    </DmbPageWrapper>
  )
}

export default GeneratorQrPage
