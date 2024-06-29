import { redirect } from 'next/navigation'
import { ContactPage } from '@/components/contact/contact-page'
import { UserContext, UserId } from '@/components/contact/contact-form.types'
import { QrCodeWhatsAppMarekKustosz } from '@/components/ui/qr-codes/qr-code-whatsapp-marek-kustosz'
import { QrCodeWhatsAppSylwiaStachow } from '@/components/ui/qr-codes/qr-code-whatsapp-sylwia-stachow'
import { Metadata } from 'next'
import './page.scss'
import { QrCodeUrlMarekKustosz } from '@/components/ui/qr-codes/qr-code-url-marek-kustosz'
import { QrCodeUrlSylwiaStachow } from '@/components/ui/qr-codes/qr-code-url-sylwia-stachow'

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  switch (id) {
    case UserId.MAREK_KUSTOSZ: {
      return {
        title: `my-dMb App | Contact | ${UserContext.MAREK_KUSTOSZ}`,
      }
    }

    case UserId.SYLWIA_STACHOW: {
      return {
        title: `my-dMb App | Contact | ${UserContext.SYLWIA_STACHOW}`,
      }
    }

    default:
      return {
        title: 'my-dMb App',
      }
  }
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Component({ params: { id }, searchParams }: Props) {
  const active = searchParams.active

  switch (id) {
    case UserId.MAREK_KUSTOSZ: {
      const {
        backgroundImageClass,
        header,
        userContext,
        contactPageQr,
        whatsappQr,
        whatsapp,
        phone,
        phoneUrl,
        linkedin,
        facebook,
        instagram,
      } = {
        backgroundImageClass: 'bg-[url("/img/contact/marek-kustosz.png")]',
        header: UserContext.MAREK_KUSTOSZ,
        userContext: UserContext.MAREK_KUSTOSZ,
        contactPageQr: <QrCodeUrlMarekKustosz />,
        whatsapp: 'https://wa.me/48600414149',
        whatsappQr: <QrCodeWhatsAppMarekKustosz />,
        instagram: 'https://www.instagram.com/marek.kustosz/',
        facebook: 'https://www.facebook.com/markust71/',
        linkedin: 'https://www.linkedin.com/in/mkustosz/',
        phoneUrl: 'tel:+48600414149',
        phone: '+48 600 414149',
      }

      return (
        <ContactPage
          backgroundImageClass={backgroundImageClass}
          header={header}
          userContext={userContext}
          contactPageQr={contactPageQr}
          whatsappQr={whatsappQr}
          whatsapp={whatsapp}
          phone={phone}
          phoneUrl={phoneUrl}
          linkedin={linkedin}
          facebook={facebook}
          instagram={instagram}
          active={active}
        />
      )
    }

    case UserId.SYLWIA_STACHOW: {
      const {
        backgroundImageClass,
        header,
        userContext,
        contactPageQr,
        whatsappQr,
        whatsapp,
        phone,
        phoneUrl,
        linkedin,
        facebook,
        instagram,
      } = {
        backgroundImageClass: 'bg-[url("/img/contact/sylwia-stachow.png")]',
        header: UserContext.SYLWIA_STACHOW,
        userContext: UserContext.SYLWIA_STACHOW,
        contactPageQr: <QrCodeUrlSylwiaStachow />,
        whatsapp: 'https://wa.me/48665009121',
        whatsappQr: <QrCodeWhatsAppSylwiaStachow />,
        instagram: 'https://www.instagram.com/sylwia_stachow/',
        facebook: 'https://www.facebook.com/sylwia.kucharzak.0',
        linkedin: 'https://www.linkedin.com/in/sylwia-stach%C3%B3w-b883892a9/',
        phoneUrl: 'tel:+48665009121',
        phone: '+48 665 009121',
      }

      return (
        <ContactPage
          backgroundImageClass={backgroundImageClass}
          header={header}
          userContext={userContext}
          contactPageQr={contactPageQr}
          whatsappQr={whatsappQr}
          whatsapp={whatsapp}
          phone={phone}
          phoneUrl={phoneUrl}
          linkedin={linkedin}
          facebook={facebook}
          instagram={instagram}
          active={active}
        />
      )
    }

    default:
      redirect('/')
  }
}
