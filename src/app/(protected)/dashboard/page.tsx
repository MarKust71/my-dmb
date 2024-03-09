import { DashboardSessionBox } from '@/components/dashboard/dashboard-session-box'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import Link from 'next/link'

const DashboardPage = async () => {
  return (
    <DashboardWrapper>
      <DashboardSessionBox />

      <Link href={'/body-cleansing-program'}>Body Cleansing Program</Link>
      <Link href={'/artistry-holistic-promo'}>Artistry Holistic Promo</Link>
      <Link href={'/contact/marek-kustosz'}>Kontakt Marek Kustosz</Link>
    </DashboardWrapper>
  )
}

export default DashboardPage
