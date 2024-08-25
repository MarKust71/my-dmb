'use server'

import * as z from 'zod'

import { ContactCustomerSchema } from '@/schemas'
import { getCustomerByEmailContext } from '@/data/contact/customer'
import { db } from '@/lib/db'

export const addCustomer = async (
  data: z.infer<typeof ContactCustomerSchema>
) => {
  const validatedFields = ContactCustomerSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, email, consent, context } = validatedFields.data

  const existingCustomer = await getCustomerByEmailContext(email, context)

  if (existingCustomer) {
    return { error: 'Taki email dodano już wcześniej!' }
  }

  await db.customer.create({
    data: {
      name,
      email,
      consent,
      context,
    },
  })

  return { success: 'Twój email został dodany!' }
}
