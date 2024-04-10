import { Invite202404112000 } from '@/components/invite/202404112000'
import { redirect } from 'next/navigation'

type Props = {
  params: { id: string }
}

const InvitationsPage = ({ params: { id } }: Props) => {
  if (id === 'next' || id === 'n') {
    return <Invite202404112000 />
  }

  if (id) {
    switch (id) {
      case '202404112000':
        return <Invite202404112000 />

      default:
        redirect('/')
    }
  }

  redirect('/')
}

export default InvitationsPage
