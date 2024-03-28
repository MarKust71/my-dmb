import { Control } from 'react-hook-form'
import { ContactFormValues } from '@/components/contact/contact-form.types'

export type ContactConsentFormProps = {
  control: Control<ContactFormValues, any>
  disabled?: boolean
}
