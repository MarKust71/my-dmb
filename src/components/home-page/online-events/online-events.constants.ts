import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export const ONLINE_EVENTS: HomePageEvent[] = [
  {
    id: 'diamond-live-event',
    title: 'Diamond Live',
    date: 'każdy poniedziałek',
    timeStart: '20:00',
    timeEnd: '21:00',
    location: 'zoom.us/j/89796337110',
    href: 'https://zoom.us/j/89796337110',
    image:
      'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fdiamond-live-event-1.jpeg?alt=media&token=c8dbc85e-6b6c-44c9-bcb5-e9a1961911b1',
    recurrence: 'WEEKLY',
  },
  {
    id: 'biznes-espresso-event',
    title: 'Biznes Espresso',
    date: 'każda sobota',
    timeStart: '9:00',
    timeEnd: '10:00',
    location: 'zoom.us/j/981646663',
    href: 'https://zoom.us/j/981646663',
    image:
      'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fbiznes-espresso-event.jpeg?alt=media&token=4c49c7a5-1ab1-4728-8508-a90be6c0f0f2',
    recurrence: 'WEEKLY',
  },
]
