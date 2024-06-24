'use client'

import { EventBoxLinkProps } from '@/components/ui/boxes/event-box/event-box-link/event-box-link.types'
import { Button } from '@/components/ui/button'
import { IconCopy } from '@/components/ui/icons/icon-copy'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'

export const EventBoxLink: React.FC<EventBoxLinkProps> = ({ url }) => {
  const { toast } = useToast()

  const handleCopyIconClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()

    console.log(' COPY: ', url)

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
      <Link href={url} target={'_blank'}>
        <Button variant={'link'} size={'auto'}>
          {url}
        </Button>
      </Link>

      <Button variant={'link'} size={'auto'} onClick={handleCopyIconClick}>
        <IconCopy width={14} height={14} fill={'none'} stroke={'#18181b'} />
      </Button>
    </div>
  )
}
