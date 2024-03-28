'use server'

import * as z from 'zod'
import { ContactCustomerSchema } from '@/schemas'
import { getCustomerByEmail } from '@/data/contact/customer'
import { db } from '@/lib/db'

export const addCustomer = async (
  data: z.infer<typeof ContactCustomerSchema>
) => {
  const validatedFields = ContactCustomerSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, email, consent } = validatedFields.data

  const existingCustomer = await getCustomerByEmail(email)

  if (existingCustomer) {
    return { error: 'Taki email dodano już wcześniej!' }
  }

  await db.customer.create({
    data: {
      name,
      email,
      consent,
    },
  })

  return { success: 'Twój email został dodany!' }
}
