import { DmbEvent } from '@/app/events/types'
import { EventListElement } from '@/components/ui/lists/event-list/event-list-element/event-list-element'

const dmbEvents: DmbEvent[] = [
  {
    header: 'DIAMOND LIVE',
    subheader: 'każdy poniedziałek, godz. 20:00',
    url: 'https://us06web.zoom.us/j/89796337110',
    route: '/events/diamond-live',
  },
  // {header: 'ŚNIADANIE Z BIZNESEM', subheader: 'każda sobota, godz. 9:00', url: 'https://zoom.us/j/981646663'},
  {
    header: 'BIZNES ESPRESSO',
    subheader: 'każda sobota, godz. 9:00',
    url: 'https://zoom.us/j/981646663',
    route: '/events/biznes-espresso',
  },
  {
    header: 'PREZENTACJA PLANU BIZNESOWEGO',
    subheader: 'każdy poniedziałek, godz. 21:00',
    url: 'https://us06web.zoom.us/j/89796337110',
  },
  {
    header: 'INTERNATIONAL AWARD CEREMONY',
    subheader: 'pierwsza niedziela miesiąca, godz. 19:00',
    url: 'https://us06web.zoom.us/j/88601812540',
    route: '/events/international-award-ceremony',
  },
  {
    header: 'WIECZÓR Z EKSPERTEM',
    subheader: 'czwartek, godz. 20:00',
    url: 'https://us02web.zoom.us/j/85906635318',
  },
]

export const EventList = () => {
  return <>{dmbEvents.map((event) => EventListElement(event))}</>
}
