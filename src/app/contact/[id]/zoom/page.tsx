import { Metadata } from 'next'

import { UserContext, UserId } from '@/components/contact/contact-form.types'
import './page.scss'
import { ContactZoom } from '@/components/contact/zoom/contact-zoom'
import type { PageProps } from '@/types'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  switch (id) {
    case UserId.MAREK_KUSTOSZ: {
      return {
        title: `myDMB App | Contact | ${UserContext.MAREK_KUSTOSZ} | Zoom`,
      }
    }

    case UserId.SYLWIA_STACHOW: {
      return {
        title: `myDMB App | Contact | ${UserContext.SYLWIA_STACHOW} | Zoom`,
      }
    }

    case UserId.RENATA_DWILEWICZ: {
      return {
        title: `myDMB App | Contact | ${UserContext.RENATA_DWILEWICZ} | Zoom`,
      }
    }

    case UserId.RADEK_DWILEWICZ: {
      return {
        title: `myDMB App | Contact | ${UserContext.RADEK_DWILEWICZ} | Zoom`,
      }
    }

    default:
      return {
        title: 'myDMB App',
      }
  }
}

const Component = async ({ params }: PageProps<PageParams>) => {
  const { id } = await params

  const { backgroundImageClass, url } = (() => {
    switch (id) {
      case UserId.RENATA_DWILEWICZ:
        return {
          backgroundImageClass:
            'bg-[url("/img/contact/zoom/renata-dwilewicz.png")] bg-cover bg-[position:50%_20%] bg-no-repeat',
          url: 'https://zoom.us/j/85891761093',
        }

      case UserId.RADEK_DWILEWICZ:
        return {
          backgroundImageClass:
            'bg-[url("/img/contact/zoom/radek-dwilewicz.png")] bg-cover bg-[position:50%_40%] bg-no-repeat',
          url: 'https://zoom.us/j/88466979766',
        }

      default:
        return { backgroundImageClass: undefined, url: undefined }
    }
  })()

  return (
    <div className={'min-h-screen flex flex-col'}>
      <ContactZoom backgroundImageClass={backgroundImageClass} url={url} />
    </div>
  )
}

export default Component
