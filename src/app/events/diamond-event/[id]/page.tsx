import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { DiamondEvent20240616 } from '@/components/event/diamond-event/20240616'
import { PageProps } from '@/types'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  return {
    title: `dMb Global | Diamond Event | ${id}`,
  }
}

const DiamondEventPage = async ({ params }: PageProps<PageParams>) => {
  const { id } = await params

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
