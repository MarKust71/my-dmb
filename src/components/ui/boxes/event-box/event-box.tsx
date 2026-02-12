import Link from 'next/link'

import { EventBoxProps } from '@/components/ui/boxes/event-box/event-box.types'
import { cn } from '@/lib/utils'

export const EventBox = ({ children, href, className }: EventBoxProps) => {
  const Wrapper = href ? Link : 'div'

  return (
    <Wrapper
      href={href ?? '#'}
      className={cn(
        'group block rounded-xl bg-card/80 p-4 shadow-sm ring-1 ring-border transition-all',
        'hover:bg-card hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        href && 'cursor-pointer',
        className
      )}
    >
      <div className="grid gap-1">{children}</div>
    </Wrapper>
  )
}
