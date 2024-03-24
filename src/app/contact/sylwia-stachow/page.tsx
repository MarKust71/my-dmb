import '../page.scss'
import { ContactForm } from '@/components/contact/contact-form'
import { QrCodeWhatsAppSylwiaStachow } from '@/components/ui/qr-codes/qr-code-whatsapp-sylwia-stachow'
import { cn } from '@/lib/utils'

const ContactSylwiaStachowPage = () => {
  return (
    <>
      <div
        className={cn(
          'h-screen w-screen flex flex-col justify-between items-start',
          'bg-[#0C0A0D] bg-[url("/img/contact/sylwia-stachow.png")] bg-no-repeat bg-cover bg-top',
          'md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        )}
      >
        <h1 className={'text-[#999DAD] text-xl font-medium p-4'}>
          Sylwia Stachów
        </h1>

        <div
          className={
            'text-white p-4 w-full h-full flex flex-col-reverse md:h-auto'
          }
        >
          <ContactForm
            whatsapp={'https://wa.me/48665009121'}
            whatsappQr={<QrCodeWhatsAppSylwiaStachow />}
            instagram={'https://www.instagram.com/sylwia_stachow/'}
            facebook={'https://www.facebook.com/sylwia.kucharzak.0'}
            linkedin={
              'https://www.linkedin.com/in/sylwia-stach%C3%B3w-b883892a9/'
            }
            phoneUrl={'tel:+48665009121'}
            phone={'+48 665 009121'}
          />
        </div>
      </div>
    </>
  )
}

export default ContactSylwiaStachowPage
