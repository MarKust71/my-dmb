export type ContactFormValues = {
  email: string
  name: string
  gdprConsent: boolean
}

export type ContactFormProps = {
  whatsapp: string
  whatsappQr: React.ReactNode
  instagram: string
  facebook: string
  linkedin: string
  phoneUrl: string
  phone: string
}

export enum ContactType {
  EMAIL = 'email',
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  LINKEDIN = 'linkedin',
}
