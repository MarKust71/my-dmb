import '../page.scss'
import { ContactForm } from '@/components/contact/contact-form'

const ContactMarekKustoszPage = () => {
  return (
    <>
      <div
        className={
          'bg-[#0C0A0D] bg-[url("/img/contact/marek-kustosz.png")] bg-no-repeat bg-cover bg-top h-screen w-screen md:max-w-[430px] md:w-auto md:mx-auto md:my-4 md:min-h-[786px] md:h-auto md:flex'
        }
      >
        {/*
        <h1 className={'text-white text-xl font-medium p-4'}>Marek Kustosz</h1>
*/}

        <div
          className={
            'text-white p-4 w-full h-full flex flex-col-reverse md:h-auto'
          }
        >
          <ContactForm />
        </div>
      </div>

      {/*
      <div className={'absolute bottom-0 text-white p-4 w-full'}>
        <ContactForm />
      </div>
*/}
    </>
  )
}

export default ContactMarekKustoszPage
