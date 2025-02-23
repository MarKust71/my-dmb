'use server'

import { getSubscriberByEmail } from '@/data/mailerlite/get-subscriber-by-email'

export const updateSubscriber = async (payload: { subscriber: { id: any; email: any }; group: { id: any } }) => {
  const { subscriber: { id: subscriberId, email }, group: { id: groupId } } = payload
  const existingSubscriber = await getSubscriberByEmail(email)

  if (existingSubscriber) {
    // update subscriber
  } else {
    // add new subscriber
  }
}
