import { UserContext } from '@/components/contact/contact-form.types'
import { ReactNode } from 'react'

export type ContactPageProps = {
  backgroundImageClass: string
  header: string
  userContext: UserContext
  whatsappQr: ReactNode
  whatsapp: string
  phone: string
  phoneUrl: string
  linkedin: string
  facebook: string
  instagram: string
}
