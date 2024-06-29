import { ContactPageProps } from '@/components/contact/contact-page.types'
import { cn } from '@/lib/utils'
import { ContactFormHeader } from '@/components/contact/contact-form-header'
import { ContactForm } from '@/components/contact/contact-form'

export const ContactPage = ({
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
  active,
}: ContactPageProps) => {
  return (
    <>
      <div
        className={cn(
          'min-h-screen w-screen flex flex-col justify-between items-start',
          `bg-[#0C0A0D] bg-no-repeat bg-cover bg-top`,
          backgroundImageClass,
          'md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        )}
      >
        <ContactFormHeader qrcode={contactPageQr}>{header}</ContactFormHeader>

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
            active={active}
          />
        </div>
      </div>
    </>
  )
}
