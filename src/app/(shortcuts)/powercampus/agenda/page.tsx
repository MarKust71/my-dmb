import { Metadata } from 'next'

import { PowerCampusAgenda } from '@/components/event/power-campus/agenda'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | PowerCampus | Agenda`,
  }
}

const PowerCampusAgendaPage = () => {
  return <PowerCampusAgenda />
}

export default PowerCampusAgendaPage
