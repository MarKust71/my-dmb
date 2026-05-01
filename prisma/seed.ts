import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '@/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  const events = [
    // Nadchodzące wydarzenia
    {
      id: 'start-up-event-20260425',
      title: 'Start-Up Tarnowskie Góry',
      date: '2026-04-25',
      timeStart: '16:00',
      timeEnd: '19:00',
      location: 'Tarnowskie Góry, ul. Opolska 5',
      image: '/img/event/start-up-event-tarnowskie-gory-20260425.jpeg',
    },
    {
      id: 'start-up-event-20260426',
      title: 'Start-Up Warszawa',
      date: '2026-04-26',
      timeStart: '14:00',
      timeEnd: '17:00',
      location: 'Warszawa, ul. Zgoda 11',
      image: '/img/event/start-up-event-warszawa-20260426.jpeg',
    },
    {
      id: 'diamond-event-20260509',
      title: 'Diamond Event Katowice',
      date: '2026-05-09',
      timeStart: '13:00',
      timeEnd: '19:00',
      location: 'Hotel voco by IHG, Katowice, al. Wojciecha Korfantego 9',
      image: '/img/event/diamond-event-katowice-20260509-1.jpeg',
    },
    // Wydarzenia cykliczne online
    {
      id: 'diamond-live-event',
      title: 'Diamond Live',
      date: 'każdy poniedziałek',
      timeStart: '20:00',
      timeEnd: '21:00',
      location: 'zoom.us/j/89796337110',
      href: 'https://zoom.us/j/89796337110',
      image: '/img/event/diamond-live-event.jpeg',
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
      image: '/img/event/biznes-espresso-event.jpeg',
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
