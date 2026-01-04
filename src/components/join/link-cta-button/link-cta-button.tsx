'use client'

import { ExternalLink } from 'lucide-react'

import { LinkCtaButtonProps } from '@/components/join/link-cta-button/link-cta-button.types'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const LinkCtaButton = ({
  label,
  href,
  description,
  featured,
}: LinkCtaButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
      aria-label={`${label}${description ? ` – ${description}` : ''}`}
    >
      <Card
        className={cn(
          'rounded-2xl border bg-background p-4 shadow-sm transition-all group-hover:-translate-y-0.5',
          'group-hover:shadow-md group-hover:border-primary/40',
          featured && 'ring-4 ring-primary/40'
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

          <div className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full rounded-xl" variant="default">
            Przejdź
          </Button>
        </div>
      </Card>
    </a>
  )
}
