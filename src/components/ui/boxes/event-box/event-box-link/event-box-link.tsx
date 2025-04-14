'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { IconCopy } from '@/components/ui/icons/icon-copy'
import { useToast } from '@/components/ui/use-toast'

import { EventBoxLinkProps } from './event-box-link.types'

export const EventBoxLink = ({
  url,
  className,
  stroke = '#18181b',
}: EventBoxLinkProps) => {
  const { toast } = useToast()

  const handleCopyIconClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      await navigator.clipboard.writeText(url)
      toast({
        className: 'font-bold justify-center bg-[#999DAD]',
        description: `Skopiowano link! ${url}`,
        duration: 3000,
      })
    } catch (error) {
      console.error('Failed to copy!', error)
      toast({
        className: 'font-bold justify-center',
        description: `Nie udało się skopiować linka :( ${error}`,
        duration: 3000,
        variant: 'destructive',
      })
    }
  }

  return (
    <div className={'flex flex-row items-center gap-2'}>
      <Link
        href={url}
        target={'_blank'}
        onClick={(event) => event.stopPropagation()}
      >
        <Button variant={'link'} size={'auto'} className={className}>
          {url}
        </Button>
      </Link>

      <Button variant={'link'} size={'auto'} onClick={handleCopyIconClick}>
        <IconCopy width={14} height={14} fill={'none'} stroke={stroke} />
      </Button>
    </div>
  )
}
