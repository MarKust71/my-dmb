'use client'

import { CalendarPlus } from 'lucide-react'

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
import { CalendarOptionsProps } from '@/components/add-to-calendar/add-to-calendar.types'

import { AddToCalendarOptions } from './add-to-calendar-options'

export const AddToCalendar = ({
  event,
  open,
  onOpenChange,
  anchor,
}: CalendarOptionsProps) => {
  const { icsHref, googleHref, icsFilename } = useCalendarLinks(event)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const options = (
    <AddToCalendarOptions
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
