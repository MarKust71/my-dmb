import { Metadata } from 'next'
import { UserContext, UserId } from '@/components/contact/contact-form.types'
import { Props } from '../page.types'

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
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

const ContactZoomPage = () => {
  return (
    <div>
      <h1>Contact Zoom Page</h1>
    </div>
  )
}

export default ContactZoomPage
