import { db } from '@/lib/db'

export const getSubscriberByEmail = async (email: string) => {
  try {
    return await db.mailerLiteSubscriber.findUnique({
      where: {
        email,
      },
    })
  } catch (error) {
    console.error('Error in getSubscriberByEmail:', error)
    return null
  }
}
