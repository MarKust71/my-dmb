import '../page.scss'
import { ContactForm } from '@/components/contact/contact-form'

const ContactMarekKustoszPage = () => {
  return (
    <>
      <div
        className={
          'bg-[#0C0A0D] bg-[url("/img/contact/marek-kustosz.png")] bg-no-repeat bg-contain bg-top h-screen w-screen'
        }
      >
        <div
          className={
            'h-screen w-screen bg-[linear-gradient(to_top,_#0C0A0D_25%,_transparent)] '
          }
        >
          {/*
        <h1 className={'text-white text-xl font-medium p-4'}>Marek Kustosz</h1>
*/}
        </div>
      </div>

      <div className={'absolute bottom-0 text-white p-4 w-full'}>
        <ContactForm />
      </div>
    </>
  )
}

export default ContactMarekKustoszPage
