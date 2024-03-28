import { db } from '@/lib/db'

export const getCustomerByEmail = async (email: string) => {
  try {
    return await db.customer.findUnique({
      where: {
        email,
      },
    })
  } catch {
    return null
  }
}
