'use client'

import { ContactFormHeaderProps } from '@/components/contact/contact-form-header.types'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

import './contact-form.css'

export const ContactFormHeader = ({
  children,
  qrcode,
}: ContactFormHeaderProps) => {
  const [isQrCodeUrlVisible, setIsQrCodeUrlVisible] = useState(true)

  const toggleIsQrCodeVisible = () => {
    setIsQrCodeUrlVisible((prevState) => !prevState)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsQrCodeUrlVisible(false)
    }, 5000)
  }, [])

  return (
    <div>
      <div onClick={toggleIsQrCodeVisible} className={'cursor-pointer'}>
        <h1
          className={cn(
            'text-[#999DAD] text-xl font-medium p-4',
            isQrCodeUrlVisible && 'text-white',
            'transition-colors duration-200 ease-in-out'
          )}
        >
          {children}
        </h1>
      </div>

      {isQrCodeUrlVisible && (
        <div className={'w-32 h-32 ml-4 bg-black/50'}>{qrcode}</div>
      )}
    </div>
  )
}
