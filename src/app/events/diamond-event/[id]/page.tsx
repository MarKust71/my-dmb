import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { DiamondEvent20240616 } from '@/components/event/diamond-event/20240616'

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `dMb Global | Diamond Event | ${id}`,
  }
}

type Props = {
  params: { id: string }
}

const DiamondEventPage = ({ params: { id } }: Props) => {
  if (id) {
    switch (id) {
      case '':
      case 'next':
      case '20240616':
        return <DiamondEvent20240616 />

      case 'n':
        redirect('/events/diamond-event/next')
        break

      default:
        redirect('/')
    }
  }

  redirect('/')
}

export default DiamondEventPage
