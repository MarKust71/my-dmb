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
          'md:h-full min-w-[576px] flex flex-1 flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 py-8',
          font.className
        )}
      >
        <div
          className={
            'flex flex-col items-center justify-center max-w-[800px] px-8'
          }
        >
          <Image src={DmbLogo} alt={'dmb-logo'} className={'mb-16'} />

          <h1 className={'text-2xl mb-4 gold-text-gradient no-antialiasing'}>
            Największa na świecie społeczność osób ambitnych
            i&nbsp;przedsiębiorczych
          </h1>

          <h1 className={'text-2xl mb-4 gold-text-gradient no-antialiasing'}>
            oraz
          </h1>

          <h1 className={'text-2xl mb-4 gold-text-gradient no-antialiasing'}>
            system wsparcia dla pragnących sukcesów, niezależności finansowej,
            zdrowia i&nbsp;urody.
          </h1>

          <div
            className={
              'md:w-full max-w-max md:max-w-[none] grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-1 auto-rows-[minmax(112px,_auto)] gold-text-gradient'
            }
          >
            <a
              href="https://dmb.global"
              target="_blank"
              className={'flex flex-col bg-white/5 hover:bg-white/10 px-8 py-2'}
            >
              <div>Odwiedź</div>
              <div className={'font-bold my-3 text-transform: uppercase'}>
                dmb.global
              </div>
            </a>

            <a
              href="https://www.instagram.com/thedmbusiness/"
              target="_blank"
              className={
                'flex flex-col bg-white/5 hover:bg-white/10 px-8 py-2 md:order-first'
              }
            >
              <div>Obserwuj</div>
              <div className={'font-bold my-3 text-transform: uppercase'}>
                thedmbusiness
              </div>
              <div>na Instagramie</div>
            </a>

            <a
              href="https://www.facebook.com/dmbglobalevents"
              target="_blank"
              className={'flex flex-col bg-white/5 hover:bg-white/10 px-8 py-2'}
            >
              <div>Dołącz do</div>
              <div className={'font-bold my-3 text-transform: uppercase'}>
                DMB Global Events
              </div>
              <div>na Facebooku</div>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
