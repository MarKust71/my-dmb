import Image from 'next/image'

import DmbLogoImage from '@/assets/images/dmb-logo.png'

type DmbLogoProps = {
  size?: number
}

export const DmbLogo = ({ size = 150 }: DmbLogoProps) => {
  return (
    <div className="rounded-2xl bg-card/80 px-7 py-5 shadow-sm ring-1 ring-border">
      <Image
        src={DmbLogoImage}
        alt="dMb Global"
        width={size}
        height={size}
        priority
      />
    </div>
  )
}
