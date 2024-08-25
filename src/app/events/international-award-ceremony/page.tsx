import Image from 'next/image'
import { Metadata } from 'next'

import InternationalAwardCeremonyImage from '@/assets/images/international-award-ceremony-image.jpeg'
import { Button } from '@/components/ui/button'

import './page.scss'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Event | International Award Ceremony',
  }
}

const InternationalAwardCeremonyPage = () => {
  return (
    <div className={'min-h-screen max-w-screen-md mx-auto bg-black'}>
      <Image
        src={InternationalAwardCeremonyImage}
        alt={'international-award-ceremony-image'}
      />

      <a
        href={'https://us06web.zoom.us/j/88601812540'}
        className={'flex justify-center py-4 mx-auto'}
      >
        <Button className={'zoom-button'}>
          Kliknij i dołącz do spotkania ZOOM
        </Button>
      </a>
    </div>
  )
}

export default InternationalAwardCeremonyPage
