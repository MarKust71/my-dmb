import { db } from '@/lib/db'

export const getAllSubscribers = async () => {
  try {
    return await db.mailerLiteSubscriber.findMany()
  } catch (error) {
    console.error('Error in getAllSubscribers:', error)

    return null
  }
}
