import { DashboardSessionBox } from '@/components/dashboard/dashboard-session-box'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import Link from 'next/link'

const DashboardPage = async () => {
  return (
    <DashboardWrapper>
      <DashboardSessionBox />

      <Link href={'/body-cleansing-program'}>Body Cleansing program</Link>
    </DashboardWrapper>
  )
}

export default DashboardPage
