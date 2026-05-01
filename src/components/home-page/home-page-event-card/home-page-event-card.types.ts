import { HomePageEvent } from '@/components/home-page/home-page-event.types'

export type HomePageEventCardProps = {
  event: HomePageEvent
  index: number
}

export type HomePageEventCardContentProps = {
  event: HomePageEvent
  onAddToCalendar?: (e: React.MouseEvent) => void
}
