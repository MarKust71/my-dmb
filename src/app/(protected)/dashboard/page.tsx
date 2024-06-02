import { DashboardSessionBox } from '@/components/dashboard/dashboard-session-box'
import { DashboardWrapper } from '@/components/dashboard/dashboard-wrapper'
import Link from 'next/link'
import { FileUpload } from '@/components/file-upload'
import { auth } from '@/auth'
import { sendMail } from '@/lib/mail'
import { Metadata } from 'next'

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
        <Link href={'/products/body-cleansing-program'} className={'flex'}>
          Product | Body Cleansing Program
        </Link>

        <Link href={'/products/artistry-holistic-promo'} className={'flex'}>
          Product | Artistry Holistic Promo
        </Link>

        <Link href={'/products/mra'} className={'flex'}>
          Product | MRA
        </Link>

        <Link href={'/contact/marek-kustosz'} className={'flex'}>
          Contact | Marek Kustosz
        </Link>

        <Link href={'/contact/sylwia-stachow'} className={'flex'}>
          Contact | Sylwia Stachów
        </Link>

        <Link href={'/e/iac'} className={'flex'}>
          Event | International Award Ceremony
        </Link>

        <Link href={'/e/bwb'} className={'flex'}>
          Event | Breakfast with Business
        </Link>

        <Link href={'/e/de'} className={'flex'}>
          Event | Diamond Event
        </Link>

        <Link href={'/e/dl'} className={'flex'}>
          Event | Diamond Live
        </Link>

        <Link href={'/i/n'} className={'flex'}>
          Invite | Next
        </Link>
      </div>

      <FileUpload />
    </DashboardWrapper>
  )
}

export default DashboardPage
