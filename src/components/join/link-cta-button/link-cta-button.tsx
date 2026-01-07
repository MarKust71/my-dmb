'use client'

import { ExternalLink, Lock } from 'lucide-react'
import { useState } from 'react'

import { Card } from '@/components/ui/card'
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

  const Wrapper: any = isLocked ? 'div' : 'a'

  return (
    <Wrapper
      {...(!isLocked
        ? {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
      className={cn('group block w-full', isLocked && 'cursor-not-allowed')}
      aria-label={`${label}${description ? ` – ${description}` : ''}`}
      aria-disabled={isLocked ? true : undefined}
      tabIndex={isLocked ? -1 : 0}
      onClick={(e: any) => {
        if (isLocked) {
          e.preventDefault?.()
          e.stopPropagation?.()
        }
      }}
    >
      <Card
        className={cn(
          'rounded-2xl border bg-card p-4 shadow-sm transition-all',
          !isLocked &&
            'group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:border-primary/40',
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
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLocked(false)
                }}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Lock className="h-4 w-4" />
              </button>
            ) : (
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            )}
          </div>
        </div>

        <div className="mt-4">
          <div
            className={cn(
              'w-full rounded-xl px-4 py-2.5 text-center text-sm font-medium shadow-sm transition-opacity',
              isLocked
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary text-primary-foreground group-hover:opacity-95'
            )}
          >
            {isLocked ? 'Zablokowane' : 'Przejdź'}
          </div>
        </div>
      </Card>
    </Wrapper>
  )
}
