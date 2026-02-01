import { EventBox } from '@/components/ui/boxes/event-box'
import { EventBoxHeader } from '@/components/ui/boxes/event-box/event-box-header'
import { EventBoxSubheader } from '@/components/ui/boxes/event-box/event-box-subheader'
import { EventBoxLink } from '@/components/ui/boxes/event-box/event-box-link'
import { DmbEvent } from '@/app/events/types'

export const EventListElement = (event: DmbEvent) => {
  return (
    <div className="grid gap-2">
      <EventBox key={event.header} href={event.route}>
        <EventBoxHeader>{event.header}</EventBoxHeader>

        <EventBoxSubheader>{event.subheader}</EventBoxSubheader>

        <EventBoxLink url={event.url} />
      </EventBox>
    </div>
  )
}
