import '../page.scss'
import { ContactForm } from '@/components/contact/contact-form'
import { cn } from '@/lib/utils'
import { QrCodeWhatsAppMarekKustosz } from '@/components/ui/qr-codes/qr-code-whatsapp-marek-kustosz'
import { ContactFormHeader } from '@/components/contact/contact-form-header'
import { QrCodeUrlMarekKustosz } from '@/components/ui/qr-codes/qr-code-url-marek-kustosz'

const ContactMarekKustoszPage = () => {
  return (
    <>
      <div
        className={cn(
          'h-screen w-screen flex flex-col justify-between items-start',
          'bg-[#0C0A0D] bg-[url("/img/contact/marek-kustosz.png")] bg-no-repeat bg-cover bg-top',
          'md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        )}
      >
        <ContactFormHeader qrcode={<QrCodeUrlMarekKustosz />}>
          {'Marek Kustosz'}
        </ContactFormHeader>

        <div
          className={
            'text-white p-4 w-full h-full flex flex-col-reverse md:h-auto'
          }
        >
          <ContactForm
            whatsapp={'https://wa.me/48600414149'}
            whatsappQr={<QrCodeWhatsAppMarekKustosz />}
            instagram={'https://www.instagram.com/marek.kustosz/'}
            facebook={'https://www.facebook.com/markust71/'}
            linkedin={'https://www.linkedin.com/in/mkustosz/'}
            phoneUrl={'tel:+48600414149'}
            phone={'+48 600 414149'}
          />
        </div>
      </div>
    </>
  )
}

export default ContactMarekKustoszPage
