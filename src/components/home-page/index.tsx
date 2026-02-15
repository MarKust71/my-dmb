'use client'

import Image from 'next/image'
import { Facebook, Globe, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import { Card } from '@/components/ui/card'
import DmbLogo from '@/assets/images/dmb-logo.png'

export default function HomePage() {
  const links = [
    {
      href: 'https://www.instagram.com/thedmbusiness/',
      icon: <Instagram className="mb-2" />,
      top: 'Obserwuj',
      mid: '@thedmbusiness',
      bot: 'na Instagramie',
    },
    {
      href: 'https://dmb.global',
      icon: <Globe className="mb-2" />,
      top: 'Odwiedź',
      mid: 'dmb.global',
      bot: '',
    },
    {
      href: 'https://www.facebook.com/dmbglobalevents',
      icon: <Facebook className="mb-2" />,
      top: 'Dołącz do',
      mid: 'DMB Global Events',
      bot: 'na Facebooku',
    },
  ]

  return (
    <DashboardWrapper>
      <main className="theme-dmb">
        <div className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6 sm:py-16 sm:max-w-4xl">
          <header className="mb-10 text-center">
            <motion.div
              className="mb-10 flex justify-center"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl bg-card/80 px-7 py-5 shadow-sm ring-1 ring-border">
                <Image
                  src={DmbLogo}
                  alt="dmb-logo"
                  width={150}
                  height={150}
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground shadow-sm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
            >
              Strona główna
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.6 }}
            >
              <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Największa na świecie międzynarodowa społeczność ambitnych
                i&nbsp;przedsiębiorczych
              </h1>

              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                System wsparcia dla ceniących wolność wyboru, rodzinę, dawanie
                innym nadziei i&nbsp;możliwości rozwoju oraz&nbsp;oczekujących
                realnej nagrody za&nbsp;zaangażowanie
              </p>
            </motion.div>
          </header>

          <section className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {links.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.55 + idx * 0.08 }}
                  className="h-full"
                >
                  <Card className="h-full rounded-2xl bg-card/80 p-0 shadow-sm ring-1 ring-border transition hover:bg-card">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full flex-col items-center justify-start px-6 py-5 text-center text-foreground"
                    >
                      {item.icon}
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.top}
                      </div>
                      <div className="my-2 text-sm font-semibold uppercase tracking-wide text-primary">
                        {item.mid}
                      </div>
                      {item.bot ? (
                        <div className="text-sm text-muted-foreground">
                          {item.bot}
                        </div>
                      ) : null}
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              className="mt-6 rounded-2xl bg-card/60 px-6 py-5 text-sm italic text-muted-foreground shadow-sm ring-1 ring-border sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85, duration: 0.8 }}
            >
              „Tworzymy przestrzeń dla ludzi z wizją, którzy chcą żyć na
              własnych zasadach.”
            </motion.blockquote>
          </section>
        </div>
      </main>
    </DashboardWrapper>
  )
}
