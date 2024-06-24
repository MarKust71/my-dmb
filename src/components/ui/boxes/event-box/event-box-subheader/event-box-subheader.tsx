import { EventBoxSubheaderProps } from '@/components/ui/boxes/event-box/event-box-subheader/event-box-subheader.types'

export const EventBoxSubheader = ({ children }: EventBoxSubheaderProps) => {
  return <h3 className={'mb-1'}>{children}</h3>
}
