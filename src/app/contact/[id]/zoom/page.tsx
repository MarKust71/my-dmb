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
        title: `my-dMb App | Contact | ${UserContext.MAREK_KUSTOSZ} | Zoom`,
      }
    }

    case UserId.SYLWIA_STACHOW: {
      return {
        title: `my-dMb App | Contact | ${UserContext.SYLWIA_STACHOW} | Zoom`,
      }
    }

    default:
      return {
        title: 'my-dMb App',
      }
  }
}

const Component = () => {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <ContactZoom />
    </div>
  )
}

export default Component
