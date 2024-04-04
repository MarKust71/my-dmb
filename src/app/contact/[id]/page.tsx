import { redirect } from 'next/navigation'
import { ContactPage } from '@/components/contact/contact-page'
import { UserContext, UserId } from '@/components/contact/contact-form.types'
import { QrCodeWhatsAppMarekKustosz } from '@/components/ui/qr-codes/qr-code-whatsapp-marek-kustosz'
import { QrCodeWhatsAppSylwiaStachow } from '@/components/ui/qr-codes/qr-code-whatsapp-sylwia-stachow'
import { Metadata } from 'next'

type Props = {
  params: { id: string }
}

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

export default function Component({ params: { id } }: Props) {
  switch (id) {
    case UserId.MAREK_KUSTOSZ: {
      const {
        backgroundImageClass,
        header,
        userContext,
        whatsappQr,
        whatsapp,
        phone,
        phoneUrl,
        linkedin,
        facebook,
        instagram,
        gtmId,
        gaId,
      } = {
        backgroundImageClass: 'bg-[url("/img/contact/marek-kustosz.png")]',
        header: UserContext.MAREK_KUSTOSZ,
        userContext: UserContext.MAREK_KUSTOSZ,
        whatsapp: 'https://wa.me/48600414149',
        whatsappQr: <QrCodeWhatsAppMarekKustosz />,
        instagram: 'https://www.instagram.com/marek.kustosz/',
        facebook: 'https://www.facebook.com/markust71/',
        linkedin: 'https://www.linkedin.com/in/mkustosz/',
        phoneUrl: 'tel:+48600414149',
        phone: '+48 600 414149',
        gtmId: `${process.env.NEXT_PUBLIC_GTM_CONTACT_MAREK_KUSTOSZ_ID}`,
        gaId: `${process.env.NEXT_PUBLIC_GA_CONTACT_MAREK_KUSTOSZ_ID}`,
      }

      return (
        <ContactPage
          backgroundImageClass={backgroundImageClass}
          header={header}
          userContext={userContext}
          whatsappQr={whatsappQr}
          whatsapp={whatsapp}
          phone={phone}
          phoneUrl={phoneUrl}
          linkedin={linkedin}
          facebook={facebook}
          instagram={instagram}
          gtmId={gtmId}
          gaId={gaId}
        />
      )
    }

    case UserId.SYLWIA_STACHOW: {
      const {
        backgroundImageClass,
        header,
        userContext,
        whatsappQr,
        whatsapp,
        phone,
        phoneUrl,
        linkedin,
        facebook,
        instagram,
        gtmId,
        gaId,
      } = {
        backgroundImageClass: 'bg-[url("/img/contact/sylwia-stachow.png")]',
        header: UserContext.SYLWIA_STACHOW,
        userContext: UserContext.SYLWIA_STACHOW,
        whatsapp: 'https://wa.me/48665009121',
        whatsappQr: <QrCodeWhatsAppSylwiaStachow />,
        instagram: 'https://www.instagram.com/sylwia_stachow/',
        facebook: 'https://www.facebook.com/sylwia.kucharzak.0',
        linkedin: 'https://www.linkedin.com/in/sylwia-stach%C3%B3w-b883892a9/',
        phoneUrl: 'tel:+48665009121',
        phone: '+48 665 009121',
        gtmId: `${process.env.NEXT_PUBLIC_GTM_CONTACT_SYLWIA_STACHOW_ID}`,
        gaId: `${process.env.NEXT_PUBLIC_GA_CONTACT_SYLWIA_STACHOW_ID}`,
      }

      return (
        <ContactPage
          backgroundImageClass={backgroundImageClass}
          header={header}
          userContext={userContext}
          whatsappQr={whatsappQr}
          whatsapp={whatsapp}
          phone={phone}
          phoneUrl={phoneUrl}
          linkedin={linkedin}
          facebook={facebook}
          instagram={instagram}
          gtmId={gtmId}
          gaId={gaId}
        />
      )
    }

    default:
      redirect('/')
  }
}
