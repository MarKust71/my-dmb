import Link from 'next/link'

import { EventBoxProps } from '@/components/ui/boxes/event-box/event-box.types'

export const EventBox = ({ children, href }: EventBoxProps) => {
  const Wrapper = href ? Link : 'div'

  if (href) {
    return (
      <Wrapper className={'w-full'} href={href} passHref>
        <div
          className={
            'flex flex-col items-center bg-white/25 p-2 min-w-full rounded shadow-md hover:shadow-lg transition-shadow hover:bg-white/35'
          }
        >
          {children}
        </div>
      </Wrapper>
    )
  }

  return (
    <div
      className={
        'flex flex-col items-center bg-white/25 p-2 min-w-full rounded shadow-md hover:shadow-lg transition-shadow hover:bg-white/35'
      }
    >
      {children}
    </div>
  )
}
