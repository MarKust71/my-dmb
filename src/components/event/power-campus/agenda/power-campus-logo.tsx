import { Montserrat } from 'next/font/google'

import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '800'],
})

type PowerCampusLogoProps = {
  className?: string
}

const GOLD_TEXT =
  'bg-gradient-to-b from-[#f7e08a] via-[#c9a227] to-[#8a6a12] bg-clip-text text-transparent'

export const PowerCampusLogo = ({ className }: PowerCampusLogoProps) => {
  return (
    <div
      role="img"
      aria-label="PowerCampus"
      className={cn(
        'flex flex-col items-start leading-none drop-shadow-[0_2px_8px_rgba(201,162,39,0.25)]',
        montserrat.className,
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          'text-[2.6rem] font-medium tracking-tight sm:text-6xl',
          GOLD_TEXT
        )}
      >
        Power
      </span>

      <span
        aria-hidden
        className={cn(
          '-mt-1 text-[2.6rem] font-extrabold tracking-tight sm:-mt-2 sm:text-6xl',
          GOLD_TEXT
        )}
      >
        CAMPUS
      </span>
    </div>
  )
}
