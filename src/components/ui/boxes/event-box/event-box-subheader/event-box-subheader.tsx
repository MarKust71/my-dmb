import { EventBoxSubheaderProps } from '@/components/ui/boxes/event-box/event-box-subheader/event-box-subheader.types'

export const EventBoxSubheader = ({ children }: EventBoxSubheaderProps) => {
  return <p className="mt-1 text-sm text-muted-foreground">{children}</p>
}
