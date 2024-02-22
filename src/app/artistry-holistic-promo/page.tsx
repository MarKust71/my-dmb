import MaxWidthWrapper from '@/components/max-width-wrapper'
import { ArtistryLogotype } from '@/components/svgs'

import './page.scss'

const ArtistryHolisticPromoPage = () => {
  return (
    <div
      className={`min-h-screen bg-[#e8e8e8] bg-[url('/img/artistry/artistry-background-mid.png')] bg-no-repeat bg-contain bg-right-top md:bg-[url('/img/artistry/artistry-background-desktop.png')] md:bg-cover`}
    >
      <MaxWidthWrapper>
        {/*<WhatsappContact />*/}
        <div className={'py-4 pl-1'}>
          <ArtistryLogotype
            className={'logo-drop-shadow logo-mobile md:logo-desktop md:py-4'}
          />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ArtistryHolisticPromoPage
