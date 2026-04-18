export type HomePageEvent = {
  id: string
  title: string
  date: string // ISO: 'YYYY-MM-DD'
  timeStart: string // 'HH:MM'
  timeEnd: string // 'HH:MM'
  location?: string
  image?: string // ścieżka do grafiki (np. '/img/event/power-campus.jpeg')
  href?: string // link do dedykowanej strony eventu
}
