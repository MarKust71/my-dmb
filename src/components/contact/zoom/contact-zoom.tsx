'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { EventBoxLink } from '@/components/ui/boxes/event-box/event-box-link'
import { cn } from '@/lib/utils'

type ContactZoomProps = {
  url?: string
  backgroundImageClass?: string
}

export const ContactZoom = ({
  url = 'https://zoom.us/j/2581716586',
  backgroundImageClass = 'bg-[url("/img/contact/zoom/zoom-consultation-online-h.png")] bg-cover bg-right bg-no-repeat',
}: ContactZoomProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const onButtonClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="theme-dmb w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-8">
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border',
            'min-h-[calc(100vh-2rem)] sm:min-h-[720px]',
            backgroundImageClass
          )}
        >
          <div className="absolute inset-0 bg-background/55 lg:bg-background/30" />
          <div className="flex flex-col justify-between relative z-10 h-full min-h-[calc(100vh-2rem)] p-5 sm:min-h-[720px] sm:p-10">
            <header className="">
              <p className="text-primary text-3xl text-right font-black leading-tight sm:text-5xl sm:text-left">
                KONSULTACJE
              </p>
              <p className="text-primary text-3xl text-right font-black leading-tight sm:text-5xl sm:text-left">
                ONLINE
              </p>

              <p className="mt-4 max-w-xl text-sm text-muted-foreground text-right sm:text-base sm:text-left">
                Wejdź do pokoju Zoom
                <br />
                jednym kliknięciem
              </p>
            </header>

            <Card
              className={cn(
                'max-w-md min-w-max',
                'border-border bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/70'
              )}
            >
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                aria-controls="contact-zoom-details"
                className="flex w-full items-center justify-between gap-3 p-6 pb-4 text-left sm:pointer-events-none sm:cursor-default"
              >
                <CardHeader className="p-0 text-base font-semibold sm:text-lg">
                  Spotkanie w pokoju ZOOM
                </CardHeader>

                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 sm:hidden',
                    isExpanded ? 'rotate-180' : 'animate-bounce'
                  )}
                />
              </button>

              <div
                id="contact-zoom-details"
                className={cn(
                  'grid transition-all duration-300 ease-in-out sm:!grid-rows-[1fr] sm:!opacity-100',
                  isExpanded
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <CardContent className="pt-0 pb-4">
                    <Button onClick={onButtonClick} size="lg" className="w-full">
                      Przejdź do pokoju
                    </Button>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">
                      lub skopiuj link do spotkania:
                    </p>

                    <div className={'w-full flex flex-row justify-center'}>
                      <EventBoxLink
                        url={url}
                        className="text-sm text-muted-foreground mt-0"
                        stroke="currentColor"
                      />
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
