import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import DmbLogo from '@/assets/images/dmb-logo.png'
import './page.scss'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <>
      <main
        className={cn(
          'flex h-full flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800',
          font.className
        )}
      >
        <Image src={DmbLogo} alt={'dmb-logo'} className={'mb-16'} />

        <h1 className={'text-2xl mb-4 gold-text-gradient no-antialiasing'}>
          Największa na świecie społeczność osób ambitnych
          i&nbsp;przedsiębiorczych
        </h1>

        <h1 className={'text-2xl mb-4 gold-text-gradient no-antialiasing'}>
          oraz
        </h1>

        <h1 className={'text-2xl gold-text-gradient no-antialiasing'}>
          system wsparcia dla pragnących sukcesów, niezależności finansowej,
          zdrowia i&nbsp;urody.
        </h1>
      </main>
    </>
  )
}
