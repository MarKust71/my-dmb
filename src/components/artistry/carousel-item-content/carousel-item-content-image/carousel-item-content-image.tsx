import Image from 'next/legacy/image'
import { CarouselItemContentImageProps } from './carousel-item-content-image.types'

export const CarouselItemContentImage = ({
  src,
  alt,
  width,
  height,
}: CarouselItemContentImageProps) => {
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
