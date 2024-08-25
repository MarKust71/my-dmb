import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { MraRegistrationFormSchema } from '@/schemas'

export type FieldPhoneProps = {
  form: UseFormReturn<z.infer<typeof MraRegistrationFormSchema>, any, undefined>
}
