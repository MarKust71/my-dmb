import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

import { MraRegistrationFormSchema } from '@/schemas'

export type FieldBirthDateProps = {
  form: UseFormReturn<z.infer<typeof MraRegistrationFormSchema>, any, any>
}
