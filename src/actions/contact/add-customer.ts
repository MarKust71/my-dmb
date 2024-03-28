'use server'

import * as z from 'zod'
import { CustomerContactSchema } from '@/schemas'
import { getCustomerByEmail } from '@/data/contact/customer'
import { db } from '@/lib/db'

export const addCustomer = async (
  data: z.infer<typeof CustomerContactSchema>
) => {
  const validatedFields = CustomerContactSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, email, consent } = validatedFields.data

  const existingCustomer = await getCustomerByEmail(email)

  if (existingCustomer) {
    return { error: 'Customer already exists!' }
  }

  await db.customer.create({
    data: {
      name,
      email,
      consent,
    },
  })

  return { success: true }
}
