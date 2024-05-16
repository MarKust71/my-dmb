import { DashboardSessionBox } from '@/components/dashboard/dashboard-session-box'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import Link from 'next/link'
import { FileUpload } from '@/components/file-upload'

const DashboardPage = async () => {
  return (
    <DashboardWrapper>
      <DashboardSessionBox />

      <h1>Links:</h1>

      <div className={'px-4'}>
        <Link href={'/body-cleansing-program'} className={'flex'}>
          Body Cleansing Program
        </Link>

        <Link href={'/artistry-holistic-promo'} className={'flex'}>
          Artistry Holistic Promo
        </Link>

        <Link href={'/contact/marek-kustosz'} className={'flex'}>
          Kontakt Marek Kustosz
        </Link>

        <Link href={'/contact/sylwia-stachow'} className={'flex'}>
          Kontakt Sylwia Stachów
        </Link>
      </div>

      <FileUpload />
    </DashboardWrapper>
  )
}

export default DashboardPage
