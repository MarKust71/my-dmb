import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { PageProps } from '@/types'
import { PowerCampusCountdownBackdrop } from '@/components/event/power-campus/20251010'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  return {
    title: `dMb Global | PowerCampus | ${id}`,
  }
}

const PowerCampusPage = async ({ params }: PageProps<PageParams>) => {
  const { id } = await params

  if (id) {
    switch (id) {
      case '':
      case 'next':
      case '20251010':
        return <PowerCampusCountdownBackdrop />

      case 'n':
        redirect('/events/power-campus/next')
        break

      default:
        redirect('/')
    }
  }

  redirect('/')
}

export default PowerCampusPage
