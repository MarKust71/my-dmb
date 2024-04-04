import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
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
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className,
            'bg-[#0C0A0D] text-white'
          )}
        >
          {children}

          <Toaster />
        </body>
      </html>
    </SessionProvider>
  )
}
