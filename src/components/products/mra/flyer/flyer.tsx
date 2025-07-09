'use client'

import Image from 'next/image'

const images = [
  '/img/mra/mra-ulotka-skan-page-1-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-2-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-3-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-5-optimized.jpg',
  '/img/mra/mra-ulotka-skan-page-6-optimized.jpg',
]

const Flyer = () => {
  return (
    <div className="flex h-screen overflow-x-auto md:flex-row flex-col md:items-start items-center">
      {images.map((src, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-auto md:h-full flex items-center"
        >
          <Image
            src={src}
            alt={`Ulotka MRA strona ${index + 1}`}
            width={600}
            height={900}
            quality={75}
            className="h-auto md:h-screen w-auto object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default Flyer
