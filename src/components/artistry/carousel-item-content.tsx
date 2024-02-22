import Image from 'next/legacy/image'
import { CarouselItemContentProps } from '@/components/artistry/carousel-item-content.types'

export const CarouselItemContent = ({
  src,
  alt,
  width,
  height,
}: CarouselItemContentProps) => {
  return (
    <div className={'drop-shadow-md text-center'}>
      <Image
        className={'rounded-xl'}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  )
}
