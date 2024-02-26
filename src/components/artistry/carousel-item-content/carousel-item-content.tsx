'use client'

import { CarouselItemContentImage } from './carousel-item-content-image'
import { CarouselItemContentProps } from './carousel-item-content.types'
import { CarouselItemContentVideo } from './carousel-item-content-video'
import * as React from 'react'
import { PrevButton } from './prev-button'
import { NextButton } from './next-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const CarouselItemContent = ({
  href = '',
  title,
  subtitle,
  src,
  alt = '',
  isVideo,
}: CarouselItemContentProps) => {
  const CarouselItemContentHeader = () => {
    return (
      <div className={'flex flex-row min-h-[140px] md:min-h-[80px]'}>
        <PrevButton />

        <div className={'flex-1'}>
          <h2 className={'text-center font-bold text-shadow mb-1'}>{title}</h2>

          <p className={'px-10 text-shadow text-center text-sm/5 mb-2'}>
            {subtitle}
          </p>
        </div>

        <NextButton />
      </div>
    )
  }

  if (isVideo) {
    return (
      <div className={'flex flex-col justify-start h-full'}>
        <CarouselItemContentHeader />

        <CarouselItemContentVideo src={src} width={'100%'} height={300} />
      </div>
    )
  }

  return (
    <>
      <CarouselItemContentHeader />

      <CarouselItemContentImage
        src={src}
        alt={alt}
        width={400}
        height={400}
        href={href}
      />

      <Link href={href} target={'_blank'}>
        <Button variant={'destructive'} className={'w-full mt-4 text-2xl'}>
          Ten klikam i zamawiam!
        </Button>
      </Link>
    </>
  )
}
