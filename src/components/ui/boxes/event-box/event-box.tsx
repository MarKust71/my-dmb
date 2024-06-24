import { EventBoxProps } from '@/components/ui/boxes/event-box/event-box.types'

export const EventBox = ({ children }: EventBoxProps) => {
  return (
    <div className={'flex flex-col items-center bg-white/25 p-2 min-w-full'}>
      {children}
    </div>
  )
}
