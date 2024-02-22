import MaxWidthWrapper from '@/components/max-width-wrapper'
import { ArtistryLogotype } from '@/components/svgs'

import './page.scss'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CarouselItemContent } from '@/components/artistry/carousel-item-content'

const ArtistryHolisticPromoPage = () => {
  return (
    <div
      className={`min-h-screen bg-[#e8e8e8] bg-[url('/img/artistry/artistry-background-mid.png')] bg-no-repeat bg-contain bg-right-top md:bg-[url('/img/artistry/artistry-background-desktop.png')] md:bg-cover`}
    >
      <MaxWidthWrapper>
        <div className={'py-4 pl-1'}>
          <ArtistryLogotype
            className={
              'logo-drop-shadow logo-mobile pt-4 md:logo-desktop md:py-4'
            }
          />
        </div>

        <div className={'mb-4'} />

        <article className={'text-shadow'}>
          <div className={'paragraph-shape'} />

          <h1 className={'text-2xl font-bold mb-2'}>
            Holistyczne zestawy Artistry
          </h1>

          <p>
            to kompleksowa odpowiedź na potrzeby skóry twarzy i ciała w zakresie
            nawilżania, ujędrniania i regeneracji. Obejmują codzienne kroki
            pielęgnacyjne, wsparcie dla skóry od wewnątrz za pomocą suplementu*
            oraz dodatkowe wsparcie w postaci Zestawu do masażu twarzy i ciała
            Artistry.
          </p>
        </article>

        <div className={'mb-4'} />

        <h1 className={'text-2xl font-bold mb-2 text-shadow'}>
          Dobierz zestaw do potrzeb swojej Pani
        </h1>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <CarouselItemContent
                href={'/artistry-holistic-promo?item=320868'}
                title={'Holistyczny nawilżający zestaw Artistry™'}
                subtitle={
                  'Do młodej skóry, która wymaga jedynie kompleksowej pielęgnacji'
                }
                src={'/img/artistry/320868_PL_IMAGE_product-image_800_800.jpg'}
                alt={'Artistry Holistic Promo'}
              />
            </CarouselItem>

            <CarouselItem>
              <CarouselItemContent
                href={'/artistry-holistic-promo?item=320871'}
                title={'Holistyczny regenerujący zestaw Artistry™'}
                subtitle={
                  'Do skóry, na której widoczne są pierwsze oznaki zmęczenia i którą trzeba odżywić oraz ujędrnić'
                }
                src={'/img/artistry/320871_PL_IMAGE_product-image_800_800.jpg'}
                alt={'Artistry Holistic Promo'}
              />
            </CarouselItem>

            <CarouselItem>
              <CarouselItemContent
                href={'/artistry-holistic-promo?item=320874'}
                title={'Holistyczny ujędrniający zestaw Artistry™'}
                subtitle={
                  'Do skóry wykazującej zaawansowane oznaki zmęczenia, potrzebującej rozjaśnienia i ujędrnienia'
                }
                src={'/img/artistry/320874_PL_IMAGE_product-image_800_800.jpg'}
                alt={'Artistry Holistic Promo'}
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />

          <CarouselNext />
        </Carousel>

        <div className={'mb-3'} />

        <p className={'text-gray-600 text-xs/3 pb-5'}>
          * Produkt Nutrilite™ Biotin C Plus zawiera biotynę i witaminę C.
          Biotyna pomaga zachować zdrową skórę. Witamina C pomaga w prawidłowej
          produkcji kolagenu w celu zapewnienia prawidłowego funkcjonowania
          skóry.
        </p>
        {/*<WhatsappContact />*/}
      </MaxWidthWrapper>
    </div>
  )
}

export default ArtistryHolisticPromoPage
