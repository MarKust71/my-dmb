'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { EventBoxLink } from '@/components/ui/boxes/event-box/event-box-link'
import { cn } from '@/lib/utils'

export const ContactZoom = () => {
  const url = 'https://zoom.us/j/2581716586'

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
            'bg-[url("/img/contact/zoom/zoom-consultation-online-h.png")] bg-cover bg-right bg-no-repeat'
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
              <CardHeader className="text-base font-semibold pb-4 sm:text-lg">
                Spotkanie w pokoju ZOOM
              </CardHeader>

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
            </Card>
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}
