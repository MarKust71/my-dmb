import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'my-dMb App',
  description: 'supported by "dMb Global" community',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="en" className="light">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <link rel="manifest" href="/manifest.json" />
        </head>

        <Script
          id="mailerlite-popup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1094428');
            `,
          }}
        />

        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className,
            'dark:bg-[#0C0A0D] dark:text-white'
          )}
        >
          {children}

          <Toaster />
          <SpeedInsights />
        </body>

        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
      </html>
    </SessionProvider>
  )
}
