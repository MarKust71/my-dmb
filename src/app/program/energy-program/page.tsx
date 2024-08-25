import Image from 'next/image'
import { Metadata } from 'next'

import EnergyProgramImage1 from '@/assets/images/program/energy-program/energy-program-image-1.jpg'
import EnergyProgramImage2 from '@/assets/images/program/energy-program/energy-program-image-2.jpg'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `dMb Global | Energy Program`,
  }
}

const EnergyProgramPage = () => {
  return (
    <>
      <div className={'min-h-screen mx-auto bg-black'}>
        <Image
          src={EnergyProgramImage1}
          alt={'energy-program-image-1'}
          className={'mx-auto'}
        />
      </div>

      <div className={'min-h-screen mx-auto bg-black'}>
        <Image
          src={EnergyProgramImage2}
          alt={'energy-program-image-2'}
          className={'mx-auto'}
        />
      </div>
    </>
  )
}

export default EnergyProgramPage
