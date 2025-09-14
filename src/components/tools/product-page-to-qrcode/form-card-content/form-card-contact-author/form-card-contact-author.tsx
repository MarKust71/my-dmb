import { ExternalLink, Loader2 } from 'lucide-react'

import { useQrStore } from '@/store/use-qr-store'

const contactAuthorUrl = 'https://mydmb.pl/c/mk'
const contactAuthorLabel = 'Kontakt z autorem generatora'

export const FormCardContactAuthor = () => {
  const isHydrated = useQrStore((s) => s.isHydrated)

  return (
    <>
      {isHydrated ? (
        <div className="flex justify-center">
          <a
            href={contactAuthorUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-medium text-blue-600 underline hover:text-blue-700`}
          >
            {contactAuthorLabel}
            <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
          </a>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />

          <span>Wczytywanie zapisanych wartości…</span>
        </div>
      )}
    </>
  )
}
