import { CalendarPlus, Download, Globe2 } from 'lucide-react'

export const AddToCalendarOptions = ({
  googleHref,
  icsHref,
  icsFilename,
  title,
}: {
  googleHref: string
  icsHref: string | null
  icsFilename: string
  title: string
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <CalendarPlus className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">Dodaj do kalendarza</span>
    </div>

    <p className="text-xs text-muted-foreground">{title}</p>

    <a
      href={googleHref}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary ring-1 ring-primary/20 transition hover:bg-primary/20"
    >
      <Globe2 className="h-4 w-4 shrink-0" />
      Google Calendar
    </a>

    {icsHref && (
      <a
        href={icsHref}
        download={icsFilename}
        className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3 text-sm font-medium text-foreground ring-1 ring-border transition hover:bg-muted"
      >
        <Download className="h-4 w-4 shrink-0" />
        Apple Calendar / Outlook (plik .ics)
      </a>
    )}
  </div>
)
