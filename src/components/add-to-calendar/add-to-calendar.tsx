'use client'

import { CalendarPlus, Globe2, Download } from 'lucide-react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useCalendarLinks } from '@/hooks/use-calendar-links'
import { useMediaQuery } from '@/hooks/use-media-query'

import { CalendarOptionsProps } from './add-to-calendar.types'

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

export const AddToCalendar = ({
  event,
  open,
  onOpenChange,
  anchor,
}: CalendarOptionsProps) => {
  const { icsHref, googleHref, icsFilename } = useCalendarLinks(event)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const options = (
    <CalendarOptions
      googleHref={googleHref}
      icsHref={icsHref}
      icsFilename={icsFilename}
      title={event.title}
    />
  )

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={onOpenChange}>
        {/* Niewidoczny anchor dla Popover — pozycjonuje się przy przycisku */}
        <PopoverTrigger asChild>
          <span
            ref={anchor as React.RefObject<HTMLSpanElement>}
            className="sr-only"
          />
        </PopoverTrigger>
        <PopoverContent className="theme-dmb w-72 p-4" align="start">
          {options}
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="theme-dmb">
        <DrawerHeader className="pb-2">
          <DrawerTitle className="flex items-center gap-2 text-base">
            <CalendarPlus className="h-4 w-4 text-primary" />
            Dodaj do kalendarza
          </DrawerTitle>
          <p className="text-sm text-muted-foreground">{event.title}</p>
        </DrawerHeader>
        <div className="flex flex-col gap-3 px-4 pb-8 pt-2">{options}</div>
      </DrawerContent>
    </Drawer>
  )
}
