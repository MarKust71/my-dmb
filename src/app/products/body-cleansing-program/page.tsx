/*
import {
  PictogramPhone,
  PictogramProgram,
  PictogramSociety,
} from '@/components/svgs'
*/
import MaxWidthWrapper from '@/components/max-width-wrapper'
import WhatsappContact from '@/components/whatsapp-contact'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Product | Body Cleansing Program',
  }
}

const BodyCleansingProgram = () => {
  return (
    <div
      className={`min-h-screen bg-[url('/img/body-cleansing-program/background-vertical.png')] md:bg-[url('/img/body-cleansing-program/body-cleansing-bundle-background.png')] bg-no-repeat bg-cover bg-left-top`}
    >
      <MaxWidthWrapper>
        <WhatsappContact />
        {/*
        <PictogramProgram />

        <PictogramSociety />

        <PictogramPhone />
*/}
      </MaxWidthWrapper>
    </div>
  )
}

export default BodyCleansingProgram
