'use client'

import { CarouselItemContentVideoProps } from './carousel-item-content-video.types'

export const CarouselItemContentVideo = ({
  src,
  width,
  height,
}: CarouselItemContentVideoProps) => {
  return (
    <div className={'drop-shadow-md text-center'}>
      <iframe
        className={'rounded-xl inline'}
        src={src}
        width={width}
        height={height}
        allow="autoplay"
      ></iframe>
    </div>
  )
}
