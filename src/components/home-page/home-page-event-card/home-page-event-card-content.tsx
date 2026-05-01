import { CalendarDays, CalendarPlus, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

import { HomePageEvent } from '@/components/home-page/home-page-event.types'
import { formatDate } from '@/helpers/format-date'

export const HomePageEventCardContent = ({
  event,
}: {
  event: HomePageEvent
}) => (
  <div className="flex h-full w-full flex-row items-stretch">
    {/* Dane eventu — lewa strona */}
    <div className="flex flex-1 flex-col justify-start gap-2 px-5 py-4">
      <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
        {event.title}
      </h3>

      <div className="mt-1 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span>
            {formatDate(event.date) === 'Invalid Date'
              ? event.date
              : formatDate(event.date)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" />
          <span>
            {event.timeStart} – {event.timeEnd}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {/* Ikona kalendarza — widoczna tylko gdy brak href */}
      {!event.href && (
        <div className="mt-2 flex items-center gap-1.5 text-xs text-primary/60">
          <CalendarPlus className="h-3.5 w-3.5" />
          <span>Dodaj do kalendarza</span>
        </div>
      )}
    </div>

    {/* Grafika — prawa strona */}
    <div className="relative w-28 shrink-0 sm:w-36">
      {event.image ? (
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 112px, 144px"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted/60">
          <CalendarDays className="h-8 w-8 text-muted-foreground/40" />
        </div>
      )}
    </div>
  </div>
)
