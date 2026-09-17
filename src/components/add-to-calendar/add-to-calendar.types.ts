import { CalendarEvent } from '@/hooks/use-calendar-links.types'

export type CalendarOptionsProps = {
  event: CalendarEvent
  open: boolean
  onOpenChangeAction: (open: boolean) => void
  // anchor potrzebny dla Popover na desktop — ref do elementu triggera
  anchor?: React.RefObject<HTMLElement | null>
}
