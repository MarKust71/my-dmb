import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { Invite202404112000 } from '@/components/invite/202404112000'

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `my-dMb App | Invite | ${id}`,
  }
}

type Props = {
  params: { id: string }
}

const InvitationsPage = ({ params: { id } }: Props) => {
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
