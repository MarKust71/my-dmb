import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '@/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  const events = [
    // ── Nadchodzące wydarzenia ─────────────────────────────────────────────
    {
      id: 'start-up-event-20260425',
      title: 'Start-Up Tarnowskie Góry',
      dateStart: '2026-04-25',
      timeStart: '16:00',
      timeEnd: '19:00',
      location: 'Tarnowskie Góry, ul. Opolska 5',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fstart-up-event-tarnowskie-gory-20260425.jpeg?alt=media&token=ea4a10de-0e7f-485e-9fa3-d4b44173435c',
    },
    {
      id: 'start-up-event-20260426',
      title: 'Start-Up Warszawa',
      dateStart: '2026-04-26',
      timeStart: '14:00',
      timeEnd: '17:00',
      location: 'Warszawa, ul. Zgoda 11',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fstart-up-event-warszawa-20260426.jpeg?alt=media&token=18cd227f-9ef2-4bd9-b7d9-0d880b30b040',
    },
    {
      id: 'diamond-event-20260509',
      title: 'Diamond Event Katowice',
      dateStart: '2026-05-09',
      timeStart: '13:00',
      timeEnd: '19:00',
      location: 'Hotel voco by IHG, Katowice, al. Wojciecha Korfantego 9',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fdiamond-event-katowice-20260509-1.jpeg?alt=media&token=fcf9aa56-a02e-4093-a818-43826a96b5da',
    },
    {
      id: 'diamond-event-20260607',
      title: 'Diamond Event Warszawa',
      dateStart: '2026-06-07',
      timeStart: '14:00',
      timeEnd: '19:00',
      location: 'Novotel Warszawa Airport, Warszawa, ul. 1 Sierpnia 1',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fdiamond-event-katowice-20260509-1.jpeg?alt=media&token=fcf9aa56-a02e-4093-a818-43826a96b5da',
    },
    {
      id: 'diamond-event-20260621',
      title: 'Diamond Event Höchberg',
      dateStart: '2026-06-21',
      timeStart: '14:00',
      timeEnd: '19:00',
      location: 'Hotel Tari, Höchberg (Niemcy), Hauptstraße 3',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fdiamond-event-katowice-20260509-1.jpeg?alt=media&token=fcf9aa56-a02e-4093-a818-43826a96b5da',
    },
    {
      id: 'power-campus-20260710',
      title: 'Power Campus Training',
      dateStart: '2026-07-10',
      dateEnd: '2026-07-12',
      timeStart: '19:00',
      timeEnd: '24:00',
      location: 'Park Hotel Diament, Zabrze, ul. 3 Maja 122A',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fpower-campus-20260710-1.jpg?alt=media&token=e68d96c6-a2c1-45c2-ba10-2ff53a4689b0',
    },
    // ── Wydarzenia cykliczne online ────────────────────────────────────────
    {
      id: 'diamond-live-event',
      title: 'Diamond Live',
      dateStart: 'każdy poniedziałek',
      timeStart: '20:00',
      timeEnd: '21:00',
      location: 'zoom.us/j/89796337110',
      href: 'https://zoom.us/j/89796337110',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fdiamond-live-event.jpeg?alt=media&token=38b425af-edf4-495b-98da-dbe1a8277187',
      recurrence: 'WEEKLY',
    },
    {
      id: 'biznes-espresso-event',
      title: 'Biznes Espresso',
      dateStart: 'każda sobota',
      timeStart: '9:00',
      timeEnd: '10:00',
      location: 'zoom.us/j/981646663',
      href: 'https://zoom.us/j/981646663',
      image:
        'https://firebasestorage.googleapis.com/v0/b/my-dmb.appspot.com/o/media%2Fimage%2Fevent%2Fbiznes-espresso-event.jpeg?alt=media&token=4c49c7a5-1ab1-4728-8508-a90be6c0f0f2',
      recurrence: 'WEEKLY',
    },
  ]

  console.log('Seeding events...')

  for (const event of events) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: event,
      create: event,
    })
    console.log(`  ✓ ${event.title}`)
  }

  console.log('Done.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
