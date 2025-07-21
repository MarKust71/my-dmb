'use client'

import Image from 'next/image'
import { Facebook, Globe, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'
import DmbLogo from '@/assets/images/dmb-logo.png'

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 px-6 py-12 space-y-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={DmbLogo} alt={'dmb-logo'} className={'mb-16'} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h1
          className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300
        bg-clip-text text-transparent"
        >
          Największa na świecie międzynarodowa społeczność ambitnych i
          przedsiębiorczych
        </h1>
        <h2
          className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text
        text-transparent"
        >
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
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            className="bg-white/5 hover:bg-white/10 px-6 py-4 transition-transform transform
          hover:-translate-y-1"
          >
            <a
              href="https://www.instagram.com/thedmbusiness/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white"
            >
              <Instagram className="mb-2" />
              <div className="font-semibold">Obserwuj</div>
              <div className="font-bold uppercase my-2">@thedmbusiness</div>
              <div>na Instagramie</div>
            </a>
          </Card>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            className="bg-white/5 hover:bg-white/10 px-6 py-4 transition-transform transform
          hover:-translate-y-1 min-h-full"
          >
            <a
              href="https://dmb.global"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white"
            >
              <Globe className="mb-2" />
              <div className="font-semibold">Odwiedź</div>
              <div className="font-bold uppercase my-2">dmb.global</div>
            </a>
          </Card>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            className="bg-white/5 hover:bg-white/10 px-6 py-4 transition-transform transform
          hover:-translate-y-1"
          >
            <a
              href="https://www.facebook.com/dmbglobalevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white"
            >
              <Facebook className="mb-2" />
              <div className="font-semibold">Dołącz do</div>
              <div className="font-bold uppercase my-2">DMB Global Events</div>
              <div>na Facebooku</div>
            </a>
          </Card>
        </motion.div>
      </motion.div>

      <motion.blockquote
        className="italic text-white text-lg max-w-2xl mx-auto mt-12"
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
