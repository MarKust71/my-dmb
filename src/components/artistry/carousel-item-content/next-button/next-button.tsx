import { ArrowRight } from 'lucide-react'
import * as React from 'react'

import { useCarousel } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const NextButton = () => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={'outline'}
      size={'icon'}
      className={cn('h-8 w-8 rounded-full', 'top-1/2 right-1 my-auto')}
      disabled={!canScrollNext}
      onClick={scrollNext}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
