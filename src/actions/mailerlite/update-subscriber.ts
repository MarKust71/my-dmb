'use server'

import * as z from 'zod'

import { getSubscriberByEmail } from '@/actions/mailerlite/get-subscriber-by-email'
import { MailerLiteSubscriberSchema } from '@/schemas'

export const updateSubscriber = async (
  data: z.infer<typeof MailerLiteSubscriberSchema>
) => {
  const validatedFields = MailerLiteSubscriberSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email } = validatedFields.data

  const existingSubscriber = await getSubscriberByEmail(email)

  if (existingSubscriber) {
    // update subscriber
    return { success: 'Subscriber ready for update!', existingSubscriber, data }
  } else {
    return { error: 'Subscriber does not exist!', data }
  }
}
