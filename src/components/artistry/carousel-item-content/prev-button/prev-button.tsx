import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import * as React from 'react'
import { useCarousel } from '@/components/ui/carousel'

export const PrevButton = () => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant={'outline'}
      size={'icon'}
      className={cn('h-8 w-8 rounded-full', 'top-1/2 left-1 my-auto')}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
