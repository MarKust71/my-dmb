import { CarouselItemContentImage } from '@/components/artistry/carousel-item-content/carousel-item-content-image'
import { CarouselItemContentProps } from './carousel-item-content.types'

export const CarouselItemContent = ({
  href,
  title,
  subtitle,
  src,
  alt,
}: CarouselItemContentProps) => {
  return (
    <a href={href}>
      <h2 className={'text-center font-bold text-shadow mb-1'}>{title}</h2>

      <p className={'px-10 text-shadow text-center text-sm/5 mb-2'}>
        {subtitle}
      </p>

      <CarouselItemContentImage src={src} alt={alt} width={400} height={400} />
    </a>
  )
}
