'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { IconCopy } from '@/components/ui/icons/icon-copy'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'

import { EventBoxLinkProps } from './event-box-link.types'

export const EventBoxLink = ({
  url,
  className,
  stroke = 'hsl(var(--muted-foreground))',
}: EventBoxLinkProps) => {
  const { toast } = useToast()

  const handleCopyIconClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      await navigator.clipboard.writeText(url)
      toast({
        className:
          'justify-center bg-card text-foreground shadow-sm ring-1 ring-border',
        description: `Skopiowano link! ${url}`,
        duration: 3000,
      })
    } catch (error) {
      console.error('Failed to copy!', error)
      toast({
        className:
          'justify-center bg-card text-foreground shadow-sm ring-1 ring-border',
        description: `Nie udało się skopiować linka :( ${error}`,
        duration: 3000,
        variant: 'destructive',
      })
    }
  }

  return (
    <div className={cn('mt-2 flex flex-row items-center gap-2', className)}>
      <Link
        href={url}
        target={'_blank'}
        onClick={(event) => event.stopPropagation()}
      >
        <Button
          variant={'link'}
          size={'auto'}
          className={
            className ??
            'h-auto p-0 text-sm text-primary underline-offset-4 hover:underline'
          }
        >
          {url}
        </Button>
      </Link>

      <Button variant={'ghost'} size={'icon'} onClick={handleCopyIconClick}>
        <IconCopy width={14} height={14} fill={'none'} stroke={stroke} />
      </Button>
    </div>
  )
}
