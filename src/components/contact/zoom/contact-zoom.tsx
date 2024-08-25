'use client'

import { detectTouchScreenDevice } from '@/lib/is-touch-screen-device'
import { cn } from '@/lib/utils'
import { EventBoxLink } from '@/components/ui/boxes/event-box/event-box-link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const ContactZoom = () => {
  const isTouchScreenDevice = detectTouchScreenDevice()

  const url = 'https://us06web.zoom.us/j/2581716586'

  const onButtonClick = () => {
    window.open(url, '_blank')
  }

  return (
    <>
      <div
        className={
          'flex flex-row justify-start md:justify-center w-full min-h-screen'
        }
      >
        <div
          className={cn(
            !isTouchScreenDevice && 'min-w-[768px] w-full',
            'min-h-screen',
            'bg-[url("/img/contact/zoom/zoom-consultation-online-h.png")] bg-contain bg-no-repeat'
          )}
        >
          <div className={'mt-[5.5%] ml-[7%] w-[45%]'}>
            <p
              className={
                'text-[#3159bc] text-[38.4px] md:text-[5vw] font-black leading-none'
              }
            >
              {'KONSULTACJE'}
            </p>

            <p
              className={
                'text-[#3159bc] text-[38.4px] md:text-[5vw] font-black leading-none'
              }
            >
              {'ONLINE'}
            </p>

            <div className={'mb-[20%]'} />

            <Card className={'w-[80%] shadow-md bg-[#3159bc] text-white'}>
              <CardHeader
                className={'text-[2vw] leading-none font-semibold p-[4%]'}
              >
                Spotkanie w pokoju ZOOM
              </CardHeader>

              <CardContent
                className={'flex flex-row justify-end -mr-[5vw] p-[4%] pt-0'}
              >
                <Button
                  onClick={onButtonClick}
                  className={
                    'bg-[#4571FF] text-[2vw] font-semibold uppercase self-end px-[8%] py-[2%] h-[10%]'
                  }
                >
                  Przejdź do pokoju
                </Button>
              </CardContent>

              <CardFooter className={'justify-center p-[4%] pt-0'}>
                <EventBoxLink
                  url={url}
                  className={'text-white text-[1.2vw]'}
                  stroke={'#fff'}
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
