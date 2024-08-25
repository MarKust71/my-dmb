'use server'

import { z } from 'zod'

import { MraRegistrationFormSchema } from '@/schemas'

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
