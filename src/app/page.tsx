import './page.scss'
import HomePage from '@/components/home-page'
import { getUpcomingEvents, getOnlineEvents } from '@/actions/events'

export default async function Home() {
  const [upcomingEvents, onlineEvents] = await Promise.all([
    getUpcomingEvents(),
    getOnlineEvents(),
  ])

  return <HomePage upcomingEvents={upcomingEvents} onlineEvents={onlineEvents} />
}
