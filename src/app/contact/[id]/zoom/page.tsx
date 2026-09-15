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

    default:
      return {
        title: 'myDMB App',
      }
  }
}

const Component = async ({ params }: PageProps<PageParams>) => {
  const { id } = await params

  const backgroundImageClass =
    id === UserId.RENATA_DWILEWICZ
      ? 'bg-[url("/img/contact/zoom/renata-dwilewicz.png")] bg-cover bg-[position:50%_20%] bg-no-repeat'
      : undefined

  const url =
    id === UserId.RENATA_DWILEWICZ
      ? 'https://zoom.us/j/85891761093'
      : undefined

  return (
    <div className={'min-h-screen flex flex-col'}>
      <ContactZoom backgroundImageClass={backgroundImageClass} url={url} />
    </div>
  )
}

export default Component
