'use server'

import * as z from 'zod'

import { db } from '@/lib/db'
import { getSubscriberByEmail } from '@/actions/mailerlite/get-subscriber-by-email'
import { MailerLiteSubscriberSchema } from '@/schemas'

export const updateSubscriber = async (data: z.infer<typeof MailerLiteSubscriberSchema>) => {
  const validatedFields = MailerLiteSubscriberSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email } = validatedFields.data

  const existingSubscriber = await getSubscriberByEmail(email)

  if (existingSubscriber) {
    // update subscriber
    // TODO: remove!
    // eslint-disable-next-line no-console
    console.log('%c', 'color: black; background-color: yellow', {existingSubscriber, data})

    return { success: 'Subscriber updated!' }
  } else {
    // add subscriber
    try {
      const result = await db.mailerLiteSubscriber.create({ data })

      return { success: 'Subscriber added!', result }
    } catch (error) {
      return { error: 'Failed to add subscriber!' }
    }
  }
}
