import { Metadata } from 'next'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ProductPageToQrcode } from '@/components/tools/product-page-to-qrcode'
import DmbLogo from '@/assets/images/dmb-logo.png'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Generator QR`,
  }
}

const GeneratorQrPage = () => {
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
                src={DmbLogo}
                alt="dMb Global"
                width={150}
                height={150}
                priority
              />
            </div>
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
    </main>
  )
}

export default GeneratorQrPage
