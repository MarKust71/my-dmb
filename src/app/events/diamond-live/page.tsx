import Image from 'next/image'
import { Metadata } from 'next'

import DiamondLiveImage from '@/assets/images/diamond-live-image-3.jpeg'
import { Button } from '@/components/ui/button'

import './page.scss'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Event | Diamond Live',
  }
}

const DiamondLivePage = () => {
  return (
    <div className="theme-dmb min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-screen-md px-4 py-6 sm:px-6 sm:py-10">
        <div className="space-y-6">
          <Image
            src={DiamondLiveImage}
            alt="diamond-live-image"
            priority
            className="mx-auto w-full h-auto rounded-xl"
          />

          <div className="flex justify-center">
            <a
              href="https://us06web.zoom.us/j/89796337110"
              className="w-full sm:w-auto"
            >
              <Button className="zoom-button w-full sm:w-auto">
                Kliknij i dołącz do spotkania ZOOM
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiamondLivePage
