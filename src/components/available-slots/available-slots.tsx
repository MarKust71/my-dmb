'use client'

import { useEffect } from 'react'

import { AvailableSlotsProps } from '@/components/available-slots/available-slots.types'

export const AvailableSlots = ({ url }: AvailableSlotsProps) => {
  useEffect(() => {
    window.location.href = url || '/'
  }, [])

  return <h5>Za chwilę nastąpi przekierowanie do strony rezerwacji...</h5>
}
