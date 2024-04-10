'use server'

import background from '@/assets/images/background.jpg'
import tlo from '@/assets/images/tlo.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import './page.scss'
import { ArtistryLogo, NutriliteLogo } from '@/components/ui/svgs'

type Props = {
  params: { id: string }
}

const InvitationsPage = ({ params: { id } }: Props) => {
  return (
    <div
      className={
        'h-full w-100 bg-white text-black flex flex-col justify-start items-center'
      }
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

      <div className={'w-full p-4 text-center'}>
        <p className={'font-bold'}>dla miłośników produktów</p>
        <div className={'flex flex-row gap-4 py-4'}>
          <ArtistryLogo />
          <NutriliteLogo />
        </div>
      </div>

      <div>
        <Image
          alt={'Zaproszenie'}
          src={background}
          quality={100}
          layout={'responsive'}
          style={{ objectFit: 'contain', padding: '10px', paddingTop: '0' }}
        />

        <a
          href={'https://us02web.zoom.us/j/85906635318'}
          className={'flex justify-center py-4 mx-auto'}
        >
          <Button className={'bg-[#074CE5]'}>Dołącz do spotkania ZOOM</Button>
        </a>
      </div>
    </div>
  )
}

export default InvitationsPage
