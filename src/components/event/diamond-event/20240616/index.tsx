import Image from 'next/image'
import DiamondEventImageVertical from '@/assets/images/diamond-event/diamond-event-20240616/diamond-event-20240616-v.jpeg'
import DiamondEventImageSquare from '@/assets/images/diamond-event/diamond-event-20240616/diamond-event-20240616-s.jpeg'
import DiamondEventImageHorizontal from '@/assets/images/diamond-event/diamond-event-20240616/diamond-event-20240616-h.jpeg'

import './styles.scss'

export const DiamondEvent20240616 = () => {
  return (
    <div className={'min-h-screen mx-auto bg-black'}>
      <Image
        src={DiamondEventImageVertical}
        alt={'diamond-event-image'}
        className={'mx-auto md:hidden'}
      />

      <Image
        src={DiamondEventImageSquare}
        alt={'diamond-event-image'}
        className={'mx-auto max-sm:hidden xl:hidden'}
      />

      <Image
        src={DiamondEventImageHorizontal}
        alt={'diamond-event-image'}
        className={'mx-auto max-xl:hidden'}
      />
    </div>
  )
}
