import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { Invite202404112000 } from '@/components/invite/202404112000'
import { PageProps } from '@/types'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  return {
    title: `my-dMb App | Invite | ${id}`,
  }
}

const InvitationsPage = async ({ params }: PageProps<PageParams>) => {
  const { id } = await params

  if (id) {
    switch (id) {
      case 'next':
      case '202404112000':
        return <Invite202404112000 />

      case 'n':
        redirect('/invite/next')
        break

      default:
        redirect('/')
    }
  }

  redirect('/')
}

export default InvitationsPage
