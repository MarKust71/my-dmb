import './page.scss'
import HomePage from '@/components/home-page'
import { getUpcomingEvents } from '@/actions/events'

export default async function Home() {
  const upcomingEvents = await getUpcomingEvents()

  return <HomePage upcomingEvents={upcomingEvents} />
}
