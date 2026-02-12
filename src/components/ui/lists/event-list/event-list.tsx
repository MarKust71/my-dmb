import { DmbEvent } from '@/app/events/types'
import { EventListElement } from '@/components/ui/lists/event-list/event-list-element/event-list-element'

const dmbEvents: DmbEvent[] = [
  {
    header: 'DIAMOND LIVE',
    subheader: 'każdy poniedziałek, godz. 20:00',
    url: 'https://zoom.us/j/89796337110',
    route: '/events/diamond-live',
  },
  {
    header: 'BIZNES ESPRESSO',
    subheader: 'każda sobota, godz. 9:00',
    url: 'https://zoom.us/j/981646663',
    route: '/events/biznes-espresso',
  },
  {
    header: 'PREZENTACJA PLANU BIZNESOWEGO (PL)',
    subheader: 'każdy poniedziałek, godz. 21:00',
    url: 'https://zoom.us/j/89796337110',
  },
  {
    header: 'PREZENTACJA PLANU BIZNESOWEGO (EN)',
    subheader: 'każdy wtorek, godz. 20:00',
    url: 'https://zoom.us/j/89312736924',
  },
  {
    header: 'PREZENTACJA PLANU BIZNESOWEGO (UKR)',
    subheader: 'każda środa, godz. 19:00',
    url: 'https://zoom.us/j/87294606915',
  },
  {
    header: 'INTERNATIONAL AWARD CEREMONY',
    subheader: 'pierwsza niedziela miesiąca, godz. 19:00',
    url: 'https://zoom.us/j/88601812540',
    route: '/events/international-award-ceremony',
    hidden: true,
  },
  {
    header: 'WIECZÓR Z EKSPERTEM',
    subheader: 'czwartek, godz. 20:00',
    url: 'https://zoom.us/j/85906635318',
    hidden: true,
  },
]

export const EventList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {dmbEvents
        .filter((event) => !event.hidden)
        .map((event, idx) => (
          <div key={`${event.header}-${idx}`}>{EventListElement(event)}</div>
        ))}
    </div>
  )
}
