import Image from 'next/legacy/image'
import { CarouselItemContentImageProps } from './carousel-item-content-image.types'

export const CarouselItemContentImage = ({
  src,
  alt,
  width,
  height,
  href,
}: CarouselItemContentImageProps) => {
  return (
    <div className={'drop-shadow-md text-center'}>
      <a
        href={href}
        className={`flex flex-col justify-between h-full max-w-[${width}px] rounded-xl overflow-hidden  mx-auto`}
        target={'_blank'}
      >
        <Image
          className={'rounded-xl'}
          src={src}
          width={width}
          height={height}
          layout={'responsive'}
          alt={alt}
        />
      </a>
    </div>
  )
}
