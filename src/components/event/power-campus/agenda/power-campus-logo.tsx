import Image from 'next/image'

import PowerCampusLogoImage from '@/assets/images/power-campus-logo.png'
import { cn } from '@/lib/utils'

type PowerCampusLogoProps = {
  className?: string
}

export const PowerCampusLogo = ({ className }: PowerCampusLogoProps) => {
  return (
    <Image
      src={PowerCampusLogoImage}
      alt="PowerCampus"
      priority
      className={cn('h-auto w-40 sm:w-60', className)}
    />
  )
}
