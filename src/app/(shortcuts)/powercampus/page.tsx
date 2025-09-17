import { Metadata } from 'next'

import { PowerCampusCountdownBackdrop } from '@/components/event/power-campus/20251010'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | PowerCampus`,
  }
}

const PowerCampusPage = async () => {
  return <PowerCampusCountdownBackdrop />
}

export default PowerCampusPage
