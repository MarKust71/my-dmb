import { ContactActiveEnum } from '@/types/contact.types'

export type ContactFormValues = {
  email: string
  name: string
  userContext: UserContext
  gdprConsent?: boolean
}

export type ContactFormProps = {
  userContext: UserContext
  whatsapp: string
  whatsappQr: React.ReactNode
  instagram: string
  facebook: string
  linkedin: string
  phoneUrl: string
  phone: string
  active?: ContactActiveEnum
}

export enum ContactType {
  EMAIL = 'email',
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  LINKEDIN = 'linkedin',
}

export enum UserContext {
  SYLWIA_STACHOW = 'Sylwia Stachów',
  MAREK_KUSTOSZ = 'Marek Kustosz',
  RENATA_DWILEWICZ = 'Renata Dwilewicz',
  RADEK_DWILEWICZ = 'Radek Dwilewicz',
}

export enum UserId {
  SYLWIA_STACHOW = 'sylwia-stachow',
  MAREK_KUSTOSZ = 'marek-kustosz',
  RENATA_DWILEWICZ = 'renata-dwilewicz',
  RADEK_DWILEWICZ = 'radek-dwilewicz',
}

export enum UserIdShort {
  SYLWIA_STACHOW = 'ss',
  MAREK_KUSTOSZ = 'mk',
}
