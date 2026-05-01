'use client'

import { CalendarPlus, Globe2, Download } from 'lucide-react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useCalendarLinks, CalendarEvent } from '@/hooks/use-calendar-links'
import { useMediaQuery } from '@/hooks/use-media-query'

type Props = {
  event: CalendarEvent
  trigger: React.ReactNode
}

const CalendarOptions = ({
  googleHref,
  icsHref,
  icsFilename,
  title,
}: {
  googleHref: string
  icsHref: string | null
  icsFilename: string
  title: string
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <CalendarPlus className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">Dodaj do kalendarza</span>
    </div>

    <p className="text-xs text-muted-foreground">{title}</p>

    <a
      href={googleHref}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary ring-1 ring-primary/20 transition hover:bg-primary/20"
    >
      <Globe2 className="h-4 w-4 shrink-0" />
      Google Calendar
    </a>

    {icsHref && (
      <a
        href={icsHref}
        download={icsFilename}
        className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3 text-sm font-medium text-foreground ring-1 ring-border transition hover:bg-muted"
      >
        <Download className="h-4 w-4 shrink-0" />
        Apple Calendar / Outlook (plik .ics)
      </a>
    )}
  </div>
)

export const AddToCalendar = ({ event, trigger }: Props) => {
  const { icsHref, googleHref, icsFilename } = useCalendarLinks(event)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent className="theme-dmb w-72 p-4" align="start">
          <CalendarOptions
            googleHref={googleHref}
            icsHref={icsHref}
            icsFilename={icsFilename}
            title={event.title}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="theme-dmb">
        <DrawerHeader className="pb-2">
          <DrawerTitle className="flex items-center gap-2 text-base">
            <CalendarPlus className="h-4 w-4 text-primary" />
            Dodaj do kalendarza
          </DrawerTitle>
          <p className="text-sm text-muted-foreground">{event.title}</p>
        </DrawerHeader>
        <div className="flex flex-col gap-3 px-4 pb-8 pt-2">
          <CalendarOptions
            googleHref={googleHref}
            icsHref={icsHref}
            icsFilename={icsFilename}
            title={event.title}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
