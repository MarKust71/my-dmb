export type CalendarEvent = {
  start: Date
  end: Date
  title: string
  location: string
  details?: string
  uid?: string
  recurrence?: 'WEEKLY' | 'DAILY' | 'MONTHLY'
}
