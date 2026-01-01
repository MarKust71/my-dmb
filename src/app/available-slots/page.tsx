import { Metadata } from 'next'

import { AvailableSlots } from '@/components/available-slots/available-slots'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Rejestracja`,
  }
}

const AvailableSlotsPage = async () => {
  return <AvailableSlots />
}

export default AvailableSlotsPage
