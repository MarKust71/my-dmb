import Image from 'next/image'

import DiamondLiveImage from '@/assets/images/diamond-live-image-1.jpeg'
import { Button } from '@/components/ui/button'

import './page.scss'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Event | Diamond Live',
  }
}

const DiamondLivePage = () => {
  return (
    <div className={'min-h-screen max-w-screen-md mx-auto bg-black'}>
      <Image
        src={DiamondLiveImage}
        alt={'diamond-live-image'}
        className={'mx-auto'}
      />

      <a
        href={'https://us06web.zoom.us/j/89796337110'}
        className={'flex justify-center py-4 mx-auto'}
      >
        <Button className={'zoom-button'}>
          Kliknij i dołącz do spotkania ZOOM
        </Button>
      </a>
    </div>
  )
}

export default DiamondLivePage
