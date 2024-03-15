import '../page.scss'
import { ContactForm } from '@/components/contact/contact-form'
import { WaQrMarekKustosz } from '@/components/ui/svgs'

const ContactSylwiaStachowPage = () => {
  return (
    <>
      <div
        className={
          'bg-[#0C0A0D] bg-[url("/img/contact/sylwia-stachow.png")] bg-no-repeat bg-cover bg-top h-screen w-screen md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        }
      >
        {/*
        <h1 className={'text-white text-xl font-medium p-4'}>Sylwia Stachów</h1>
*/}

        <div
          className={
            'text-white p-4 w-full h-full flex flex-col-reverse md:h-auto'
          }
        >
          <ContactForm
            whatsapp={'https://wa.me/48665009121'}
            whatsappQr={<WaQrMarekKustosz />}
            instagram={'https://www.instagram.com/marek.kustosz/'}
            facebook={'https://www.facebook.com/markust71/'}
            linkedin={'https://www.linkedin.com/in/mkustosz/'}
            phoneUrl={'tel:+48600414149'}
            phone={'+48 665 009121'}
          />
        </div>
      </div>
    </>
  )
}

export default ContactSylwiaStachowPage
