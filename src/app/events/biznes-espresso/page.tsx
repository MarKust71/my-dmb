import Image from 'next/image'
import { Metadata } from 'next'

import BiznesEspressoImage from '@/assets/images/breakfast-with-business-image.jpeg'
import { Button } from '@/components/ui/button'

import './page.scss'

const nbsp = '\u00A0'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Event | Biznes Espresso',
  }
}

const BiznesEspressoPage = () => {
  return (
    <div
      className={
        'min-h-screen w-full md:max-w-screen-md md:mx-auto bg-[#FFF2EB]'
      }
    >
      <div className={'absolute w-full md:max-w-screen-md h-40 bg-[#36231D]'} />

      <div className={'p-8 relative z-10'}>
        <div
          className={'relative w-full z-10 p-8 pt-0 border-[#36231D] border-2'}
        >
          <Image
            className={''}
            src={BiznesEspressoImage}
            alt={'biznes-espresso-image'}
          />

          <h1 className={'text-2xl font-bold text-[#422418] mt-4 text-center'}>
            {`Biznes Espresso`}
          </h1>

          <h2 className={'text-lg text-[#422418] text-center mt-2'}>
            {'sobota, godzina 9:00'}
          </h2>

          <a
            href={'https://zoom.us/j/981646663'}
            className={'flex justify-center mx-auto mt-8'}
          >
            <Button className={'zoom-button rounded-full'}>
              Kliknij i dołącz do spotkania ZOOM
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BiznesEspressoPage
