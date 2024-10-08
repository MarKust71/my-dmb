import { ReactNode } from 'react'

import { UserContext } from '@/components/contact/contact-form.types'
import { ContactActiveEnum } from '@/types/contact.types'

export type ContactPageProps = {
  backgroundImageClass: string
  header: string
  userContext: UserContext
  contactPageQr: ReactNode
  whatsappQr: ReactNode
  whatsapp: string
  phone: string
  phoneUrl: string
  linkedin: string
  facebook: string
  instagram: string
  active?: ContactActiveEnum
}
