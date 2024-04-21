import MaxWidthWrapper from '@/components/max-width-wrapper'
import { ArtistryLogotype } from '@/components/ui/svgs'

import './page.scss'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { CarouselItemContent } from '@/components/artistry/carousel-item-content'
import Image from 'next/legacy/image'

const ArtistryHolisticPromoPage = () => {
  return (
    <>
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
              Holistyczne zestawy Artistry™
            </h1>

            <p className={'text-sm md:text-md'}>
              to kompleksowa odpowiedź na&nbsp;potrzeby skóry twarzy
              i&nbsp;ciała w&nbsp;zakresie nawilżania, ujędrniania
              i&nbsp;regeneracji. Obejmują codzienne kroki pielęgnacyjne,
              wsparcie dla skóry od&nbsp;wewnątrz za pomocą suplementu* oraz
              dodatkowe wsparcie w&nbsp;postaci Zestawu do masażu twarzy
              i&nbsp;ciała Artistry™.
            </p>
          </article>

          <div className={'mb-8'} />

          <h1 className={'text-2xl font-bold mb-4 text-shadow'}>
            Dobierz ekskluzywny zestaw do&nbsp;swoich indywidualnych potrzeb
          </h1>

          <div className={'md:w-1/2 md:mx-auto'}>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <CarouselItemContent
                    href={
                      'https://www.amway.pl/pl/recommendedProducts/sharedProducts-b9ac74b4-e5b0-479c-9dc0-9663d7f0dff6?aboSponsorCode=8286448&utm_source=copylink&utm_medium=sharebar&utm_campaign=pl_pl_15000008286448_102953354'
                    }
                    title={'Holistyczny nawilżający zestaw Artistry™'}
                    subtitle={
                      'Do młodej skóry, która wymaga jedynie kompleksowej pielęgnacji'
                    }
                    src={
                      '/img/artistry/320868_PL_IMAGE_product-image_800_800.jpg'
                    }
                    alt={'Artistry Holistic Promo'}
                  />
                </CarouselItem>

                <CarouselItem>
                  <CarouselItemContent
                    href={
                      'https://www.amway.pl/pl/recommendedProducts/sharedProducts-227176cc-0c04-4ad7-87cf-a351fe580dcd?aboSponsorCode=8286448&utm_source=copylink&utm_medium=sharebar&utm_campaign=pl_pl_15000008286448_102953354'
                    }
                    title={'Holistyczny regenerujący zestaw Artistry™'}
                    subtitle={
                      'Do skóry, na której widoczne są pierwsze oznaki zmęczenia i którą trzeba odżywić oraz ujędrnić'
                    }
                    src={
                      '/img/artistry/320871_PL_IMAGE_product-image_800_800.jpg'
                    }
                    alt={'Artistry Holistic Promo'}
                  />
                </CarouselItem>

                <CarouselItem>
                  <CarouselItemContent
                    href={
                      'https://www.amway.pl/pl/recommendedProducts/sharedProducts-0c645145-ebbb-4056-96b1-82e14a14763b?aboSponsorCode=8286448&utm_source=copylink&utm_medium=sharebar&utm_campaign=pl_pl_15000008286448_102953354'
                    }
                    title={'Holistyczny ujędrniający zestaw Artistry™'}
                    subtitle={
                      'Do skóry wykazującej zaawansowane oznaki zmęczenia, potrzebującej rozjaśnienia i ujędrnienia'
                    }
                    src={
                      '/img/artistry/320874_PL_IMAGE_product-image_800_800.jpg'
                    }
                    alt={'Artistry Holistic Promo'}
                  />
                </CarouselItem>

                <CarouselItem>
                  <CarouselItemContent
                    isVideo
                    title={'Holistyczny ujędrniający zestaw Artistry™'}
                    subtitle={'film promocyjny'}
                    src={
                      'https://drive.google.com/file/d/1VtfVITw8W46WI5fpFKIRhHdoIZ5Ng_ze/preview'
                    }
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          <div className={'mb-6'} />

          <p className={'text-center text-xs/3 pb-5'}>
            Wszystkie oferowane produkty objęte są 90-dniową gwarancją
            satysfakcji, która w przypadku braku zadowolenia z ich działania
            umożliwia w tym czasie ich wymianę na inny produkt lub jego zwrot.
          </p>

          <p className={'text-gray-600 text-xs/3 pb-5'}>
            * Produkt Nutrilite™ Biotin C Plus zawiera biotynę i witaminę C.
            Biotyna pomaga zachować zdrową skórę. Witamina C pomaga w
            prawidłowej produkcji kolagenu w celu zapewnienia prawidłowego
            funkcjonowania skóry.
          </p>

          <div
            className={
              'flex flex-col justify-center md:flex-row md:h-[300px] md:gap-2'
            }
          >
            <div className={'md:w-[400px]'}>
              <Image
                src={'/img/artistry/page107-Artistry.png'}
                width={400}
                height={300}
                layout={'responsive'}
                alt={'Artistry Holistic Promo'}
              />
            </div>

            <div className={'md:w-[400px]'}>
              <Image
                src={'/img/artistry/page107-Nutrilite.png'}
                width={400}
                height={300}
                layout={'responsive'}
                alt={'Artistry Holistic Promo'}
              />
            </div>
          </div>

          <div className={'mb-3'} />

          <p className={'text-gray-600 text-xs/3 pb-5 text-center'}>
            Kampania jest realizowana przez:
            <br /> MITAX Consulting sp. z o.o. z siedzibą w Zgorzelcu,
            <br />
            NIP PL6152043432
          </p>
        </MaxWidthWrapper>
      </div>
    </>
  )
}

export default ArtistryHolisticPromoPage
