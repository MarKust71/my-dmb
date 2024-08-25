import Image from 'next/image'

import { cn } from '@/lib/utils'
import tlo from '@/assets/images/tlo.jpg'
import { ArtistryLogo, NutriliteLogo } from '@/components/ui/svgs'
import { Button } from '@/components/ui/button'
import background from '@/assets/images/background.jpg'
import '../page.scss'

export const Invite202404112000 = () => {
  return (
    <div
      className={cn(
        'min-h-screen w-screen bg-white text-black flex flex-col justify-start items-center',
        'md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
      )}
    >
      <div className={'relative'}>
        <Image
          alt={'Tło'}
          src={tlo}
          quality={100}
          layout={'responsive'}
          style={{
            objectFit: 'contain',
            position: 'relative',
          }}
        />

        <h1 className={'text-white'}>{`Zaproszenie`}</h1>
      </div>

      <div className={'w-full px-4 pt-2 text-center'}>
        <p className={'font-bold'}>dla miłośników produktów</p>

        <div className={'flex flex-row gap-4 pb-4 pt-2'}>
          <ArtistryLogo />

          <NutriliteLogo />
        </div>
      </div>

      <a
        href={'https://us02web.zoom.us/j/85906635318'}
        className={'flex justify-center py-4 mx-auto'}
      >
        <Button className={'bg-[#074CE5]'}>Dołącz do spotkania ZOOM</Button>
      </a>

      <div>
        <Image
          alt={'Zaproszenie'}
          src={background}
          quality={100}
          layout={'responsive'}
          style={{ objectFit: 'contain', padding: '10px' }}
        />
      </div>
    </div>
  )
}
