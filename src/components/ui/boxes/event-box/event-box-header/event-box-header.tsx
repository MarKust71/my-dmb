import { EventBoxHeaderProps } from '@/components/ui/boxes/event-box/event-box-header/event-box-header.types'

export const EventBoxHeader = ({ children }: EventBoxHeaderProps) => {
  return (
    <h2 className="text-base font-semibold tracking-tight sm:text-lg">
      {children}
    </h2>
  )
}
