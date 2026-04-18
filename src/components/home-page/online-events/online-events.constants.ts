import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export const ONLINE_EVENTS: HomePageEvent[] = [
  {
    id: 'diamond-live-event',
    title: 'Diamond Live',
    date: 'każdy poniedziałek',
    timeStart: '20:00',
    timeEnd: '21:00',
    location: 'https://zoom.us/j/89796337110',
    href: 'https://zoom.us/j/89796337110',
    image: '/img/event/diamond-live-event.jpeg',
  },
  {
    id: 'biznes-espresso-event',
    title: 'Biznes Espresso',
    date: 'każda sobota',
    timeStart: '9:00',
    timeEnd: '10:00',
    location: 'https://zoom.us/j/981646663',
    href: 'https://zoom.us/j/981646663',
    image: '/img/event/biznes-espresso-event.jpeg',
  },
]
