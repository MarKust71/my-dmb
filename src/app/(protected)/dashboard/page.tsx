import Link from 'next/link'
import { Metadata } from 'next'

import { DashboardSessionBox } from '@/components/dashboard/dashboard-session-box'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import { FileUpload } from '@/components/file-upload'
import { auth } from '@/auth'
import { sendMail } from '@/lib/mail'
import { InitMraContext } from '@/components/products/mra/init-mra-context'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Dashboard',
  }
}

const DashboardPage = async () => {
  const session = await auth()

  // await sendMail({
  //   from: 'Acme <rejestracja@mydmb.pl>',
  //   to: ['marek.kustosz@gmail.com'],
  //   subject: 'Potwierdź email podany podczas rejestracji',
  //   html: '<h1>Witaj Marek!</h1><p>Kliknij w poniższy link, aby potwierdzić email podany podczas rejestracji:</p><a href="https://mydmb.pl/confirm-email?token=123">Potwierdź email</a>',
  // })

  return (
    <DashboardWrapper>
      <DashboardSessionBox session={session} />

      <h1>Links:</h1>

      <div className={'px-4'}>
        <Link
          href={'/contact/marek-kustosz'}
          className={'flex'}
          target={'_blank'}
        >
          Contact | Marek Kustosz
        </Link>

        <Link
          href={'/contact/sylwia-stachow'}
          className={'flex'}
          target={'_blank'}
        >
          Contact | Sylwia Stachów
        </Link>

        <div className={'flex mb-2'} />

        <Link
          href={'/products/body-cleansing-program'}
          className={'flex'}
          target={'_blank'}
        >
          Product | Body Cleansing Program
        </Link>

        <Link
          href={'/products/artistry-holistic-promo'}
          className={'flex'}
          target={'_blank'}
        >
          Product | Artistry Holistic Promo
        </Link>

        <Link href={'/products/mra'} className={'flex'} target={'_blank'}>
          Product | MRA
        </Link>

        <div className={'flex flex-col pl-4'}>
          <Link
            href={'/products/mra/registration'}
            className={'flex'}
            target={'_blank'}
          >
            Product | MRA | Registration
          </Link>

          <Link
            href={'/products/mra/reports/202404191957'}
            className={'flex'}
            target={'_blank'}
          >
            Product | MRA | Reports
          </Link>
        </div>

        <div className={'flex mb-2'} />

        <Link href={'/e'} className={'flex'} target={'_blank'}>
          Events
        </Link>

        <div className={'flex flex-col pl-4'}>
          <Link href={'/e/iac'} className={'flex'} target={'_blank'}>
            Event | International Award Ceremony
          </Link>

          <Link href={'/e/bwb'} className={'flex'} target={'_blank'}>
            Event | Breakfast with Business
          </Link>

          <Link href={'/e/de'} className={'flex'} target={'_blank'}>
            Event | Diamond Event
          </Link>

          <Link href={'/e/dl'} className={'flex'} target={'_blank'}>
            Event | Diamond Live
          </Link>
        </div>

        <div className={'flex mb-2'} />

        <Link href={'/i/n'} className={'flex'} target={'_blank'}>
          Invite | Next
        </Link>

        <div className={'flex mb-2'} />

        <Link href={'/campaign'} className={'flex'} target={'_blank'}>
          Campaign
        </Link>

        <Link href={'/umow-konsultacje'} className={'flex'} target={'_blank'}>
          Konsultacje
        </Link>
      </div>

      <FileUpload />

      <InitMraContext />
    </DashboardWrapper>
  )
}

export default DashboardPage
