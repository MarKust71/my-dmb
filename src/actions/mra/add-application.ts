'use server'

import { MraRegistrationFormSchema } from '@/schemas'
import { z } from 'zod'

export const addApplication = async (
  data: z.infer<typeof MraRegistrationFormSchema>
) => {
  const validatedFields = MraRegistrationFormSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  // TODO: remove!
  // eslint-disable-next-line no-console
  console.log('%c addApplication: ', 'color: black; background-color: yellow', {
    data,
  })

  return { success: 'Application added!' }
}
