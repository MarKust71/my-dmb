import { ContactPageProps } from '@/components/contact/contact-page.types'
import { cn } from '@/lib/utils'
import { ContactFormHeader } from '@/components/contact/contact-form-header'
import { QrCodeUrlMarekKustosz } from '@/components/ui/qr-codes/qr-code-url-marek-kustosz'
import { ContactForm } from '@/components/contact/contact-form'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const ContactPage = ({
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
}: ContactPageProps) => {
  return (
    <>
      <div
        className={cn(
          'h-screen w-screen flex flex-col justify-between items-start',
          `bg-[#0C0A0D] bg-no-repeat bg-cover bg-top`,
          backgroundImageClass,
          'md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        )}
      >
        <ContactFormHeader qrcode={<QrCodeUrlMarekKustosz />}>
          {header}
        </ContactFormHeader>

        <div
          className={
            'text-white p-4 w-full h-full flex flex-col-reverse md:h-auto'
          }
        >
          <ContactForm
            userContext={userContext}
            whatsapp={whatsapp}
            whatsappQr={whatsappQr}
            instagram={instagram}
            facebook={facebook}
            linkedin={linkedin}
            phoneUrl={phoneUrl}
            phone={phone}
          />
        </div>
      </div>

      <GoogleTagManager gtmId={gtmId} />
      <GoogleAnalytics gaId={gaId} />
    </>
  )
}
