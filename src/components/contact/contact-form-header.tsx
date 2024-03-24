'use client'

import { ContactFormHeaderProps } from '@/components/contact/contact-form-header.types'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const ContactFormHeader = ({
  children,
  qrcode,
}: ContactFormHeaderProps) => {
  const [isQrCodeUrlVisible, setIsQrCodeUrlVisible] = useState(false)

  const toggleIsQrCodeVisible = () => {
    setIsQrCodeUrlVisible((prevState) => !prevState)
  }

  return (
    <>
      <div onClick={toggleIsQrCodeVisible}>
        <h1
          className={cn(
            'text-[#999DAD] text-xl font-medium p-4',
            isQrCodeUrlVisible && 'text-[#fff]'
          )}
        >
          {children}
        </h1>
      </div>

      {isQrCodeUrlVisible && (
        <div className={'w-32 h-32 ml-4 bg-black/50'}>{qrcode}</div>
      )}
    </>
  )
}
