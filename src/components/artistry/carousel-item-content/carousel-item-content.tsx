'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { CarouselItemContentImage } from './carousel-item-content-image'
import { CarouselItemContentProps } from './carousel-item-content.types'
import { CarouselItemContentVideo } from './carousel-item-content-video'
import { PrevButton } from './prev-button'
import { NextButton } from './next-button'

export const CarouselItemContent = ({
  href = '',
  title,
  subtitle,
  src,
  alt = '',
  isVideo,
}: CarouselItemContentProps) => {
  const closeButtonRef: React.Ref<HTMLButtonElement | undefined> =
    React.createRef()

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

  const onClick = () => {
    setTimeout(() => closeButtonRef?.current?.click(), 3000)
  }

  const onClose = () => {
    let timeoutId = window.setTimeout(function () {}, 0)

    while (timeoutId--) {
      window.clearTimeout(timeoutId)
    }
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

      <Drawer onClose={onClose}>
        <DrawerTrigger className={'w-full'} onClick={onClick}>
          <CarouselItemContentImage
            src={src}
            alt={alt}
            width={400}
            height={400}
            href={href}
          />

          <Button variant={'destructive'} className={'w-full mt-4 text-2xl'}>
            Ten klikam i zamawiam!
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Doskonały wybór!</DrawerTitle>
            </DrawerHeader>

            <p className={'p-4 text-justify'}>
              Za chwilę nastąpi przekierowanie do naszego sklepu internetowego.
            </p>

            <p className={'px-4 text-justify'}>
              Finalizacja zakupu wymaga posiadania indywidualnego konta
              w&nbsp;serwisie. Założenie konta jest bezpłatne i&nbsp;zajmuje
              tylko chwilę. Posiadanie konta nie pociąga za sobą żadnych
              zobowiązań ani kosztów w&nbsp;przyszłości, a&nbsp;będzie jedynie
              ułatwieniem w&nbsp;przypadku potrzeby złożenia reklamacji,
              dokonania wymiany albo zwrotu zakupionego towaru.
            </p>

            <p className={'p-4 text-justify'}>
              Założenie konta nie zmusza do dokonania zakupu, ale umożliwi
              bezpośredni kontakt ze sprzedającym.
            </p>
            <DrawerFooter>
              <DrawerClose
                asChild
                ref={closeButtonRef as React.Ref<HTMLButtonElement> | undefined}
              >
                <Link href={href} target={'_blank'}>
                  <Button variant={'destructive'} className={'w-full'}>
                    Idę dalej
                  </Button>
                </Link>
              </DrawerClose>

              <DrawerClose asChild>
                <Button variant="ghost" className={'text-gray-500'}>
                  Wracam
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
