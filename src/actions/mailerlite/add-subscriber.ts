'use server'

import * as z from 'zod'

import { db } from '@/lib/db'
import { getSubscriberByEmail } from '@/actions/mailerlite/get-subscriber-by-email'
import { MailerLiteSubscriberSchema } from '@/schemas'
import { generateHmacCode } from '@/lib/generate-hmac-code'

export const addSubscriber = async (
  data: z.infer<typeof MailerLiteSubscriberSchema>
) => {
  const validatedFields = MailerLiteSubscriberSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email } = validatedFields.data

  const existingSubscriber = await getSubscriberByEmail(email)

  if (existingSubscriber) {
    return { error: 'Subscriber already exists!', existingSubscriber }
  } else {
    // add subscriber
    const code = generateHmacCode()
    const validTo = new Date()
    validTo.setDate(validTo.getDate() + 3)
    validTo.setHours(23, 59, 59, 999)

    try {
      const result = await db.mailerLiteSubscriber.create({
        data: {
          ...data,
          dmbBusinessPlanAccessCode: code,
          dmbBusinessPlanAccessCodeValidFrom: new Date().toISOString(),
          dmbBusinessPlanAccessCodeValidTo: validTo.toISOString(),
        },
      })

      return { success: 'Subscriber added!', result }
    } catch (error) {
      return { error: 'Failed to add subscriber!' }
    }
  }
}
