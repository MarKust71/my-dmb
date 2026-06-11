import './page.scss'
import HomePage from '@/components/home-page'
import { getUpcomingEvents } from '@/actions/events/get-upcoming-events'
import { getOnlineEvents } from '@/actions/events/get-online-events'

export default async function Home() {
  const [upcomingEvents, onlineEvents] = await Promise.all([
    getUpcomingEvents(),
    getOnlineEvents(),
  ])

  return (
    <HomePage upcomingEvents={upcomingEvents} onlineEvents={onlineEvents} />
  )
}
