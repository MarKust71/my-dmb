'use client'

import Image from 'next/image'
import { Facebook, Globe, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import DmbLogo from '@/assets/images/dmb-logo.png'

export default function HomePage() {
  return (
    <main
      className="
        theme-dmb
        min-h-screen flex flex-col items-center justify-center text-center
        bg-background text-foreground
        px-6 py-12 space-y-10
      "
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={DmbLogo} alt="dmb-logo" className="mb-16" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          Największa na świecie międzynarodowa społeczność ambitnych i
          przedsiębiorczych
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          System wsparcia dla tych, którzy pragną sukcesów, niezależności
          finansowej, zdrowia i urody.
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            href: 'https://www.instagram.com/thedmbusiness/',
            icon: <Instagram className="mb-2" />,
            top: 'Obserwuj',
            mid: '@thedmbusiness',
            bot: 'na Instagramie',
          },
          {
            href: '#',
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
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card
              className="
                bg-card/60 hover:bg-card/80
                border-border
                px-6 py-4 transition-transform transform hover:-translate-y-1 min-h-full
              "
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-foreground"
              >
                {item.icon}
                <div className="font-semibold">{item.top}</div>
                <div className="font-bold uppercase my-2 text-primary">
                  {item.mid}
                </div>
                {item.bot ? <div>{item.bot}</div> : null}
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.blockquote
        className="italic text-foreground text-lg max-w-2xl mx-auto mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        „Tworzymy przestrzeń dla ludzi z wizją, którzy chcą żyć na własnych
        zasadach.”
      </motion.blockquote>
    </main>
  )
}
