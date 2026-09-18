'use client'

import { Lock, QrCode } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { generateQrPngDataUrl } from '@/components/tools/product-page-to-qrcode/helpers/generate-qr-png-data-url'
import { cn } from '@/lib/utils'

import { LinkCtaButtonProps } from './link-cta-button.types'

export const LinkCtaButton = ({
  label,
  href,
  description,
  featured,
  disabled,
}: LinkCtaButtonProps) => {
  const [isLocked, setIsLocked] = useState(!!disabled)
  const [isQrOpen, setIsQrOpen] = useState(false)
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)

  const handleShowQrCode = async () => {
    setIsQrOpen(true)

    if (!qrDataUrl) {
      setQrDataUrl(await generateQrPngDataUrl(href))
    }
  }

  return (
    <>
      <Card
        className={cn(
          'group rounded-2xl border bg-card p-4 shadow-sm transition-all',
          !isLocked &&
            'hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40',
          featured &&
            'ring-2 ring-primary/35 bg-gradient-to-b from-card to-card/70',
          isLocked && 'opacity-60'
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-base font-semibold tracking-tight">
              {label}
            </div>
            {description ? (
              <div className="mt-1 text-sm text-muted-foreground">
                {description}
              </div>
            ) : null}
          </div>

          <div className="mt-0.5 shrink-0">
            {isLocked ? (
              <button
                type="button"
                aria-label="Odblokuj"
                onClick={() => setIsLocked(false)}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Lock className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                aria-label="Pokaż kod QR"
                onClick={handleShowQrCode}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <QrCode className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4">
          {isLocked ? (
            <div
              className="w-full cursor-not-allowed rounded-xl bg-muted px-4 py-2.5 text-center text-sm font-medium text-muted-foreground shadow-sm"
              aria-disabled
            >
              Zablokowane
            </div>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Przejdź – ${label}${description ? ` – ${description}` : ''}`}
              className="block w-full rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-medium !text-primary-foreground shadow-sm no-underline transition-opacity hover:opacity-95 hover:no-underline"
            >
              Przejdź
            </a>
          )}
        </div>
      </Card>

      <Dialog open={isQrOpen} onOpenChange={setIsQrOpen}>
        <DialogContent className="flex flex-col items-center gap-4 p-6">
          <DialogTitle>{label}</DialogTitle>

          {qrDataUrl ? (
            <Image
              src={qrDataUrl}
              alt={`Kod QR – ${label}`}
              width={224}
              height={224}
              className="h-56 w-56 rounded-xl border"
            />
          ) : (
            <div className="flex h-56 w-56 items-center justify-center text-sm text-muted-foreground">
              Generowanie kodu QR…
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
