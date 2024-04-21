import Image from 'next/image'

import DiamondLiveImage from '@/assets/images/diamond-live-image.jpeg'
import { Button } from '@/components/ui/button'

import './page.scss'

const DiamondLivePage = () => {
  return (
    <div className={'min-h-screen max-w-screen-md mx-auto bg-black'}>
      <Image src={DiamondLiveImage} alt={'diamond-live-image'} />

      <a
        href={'https://us06web.zoom.us/j/89796337110'}
        className={'flex justify-center py-4 mx-auto'}
      >
        <Button className={'bg-[#074CE5]'}>Dołącz do spotkania ZOOM</Button>
      </a>
    </div>
  )
}

export default DiamondLivePage
