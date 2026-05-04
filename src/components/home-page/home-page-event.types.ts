export type HomePageEvent = {
  id: string
  title: string
  date: string // ISO: 'YYYY-MM-DD' lub tekst np. 'każdy poniedziałek'
  timeStart: string // 'HH:MM'
  timeEnd: string // 'HH:MM'
  location?: string
  image?: string // ścieżka do grafiki (np. '/img/event/power-campus.jpeg')
  href?: string // link do dedykowanej strony eventu
  inactive?: boolean // jeśli nie podane, wyliczane automatycznie na podstawie date + timeEnd
  recurrence?: 'WEEKLY' | 'DAILY' | 'MONTHLY' // dla wydarzeń cyklicznych
}

export type HomePageProps = {
  upcomingEvents: HomePageEvent[]
  onlineEvents: HomePageEvent[]
}
