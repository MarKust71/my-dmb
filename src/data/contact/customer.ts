import { db } from '@/lib/db'

export const getCustomerByEmailContext = async (
  email: string,
  context: string
) => {
  try {
    return await db.customer.findUnique({
      where: {
        email_context: {
          email,
          context,
        },
      },
    })
  } catch (error) {
    console.error('Error in getCustomerByEmailContext:', error)
    return null
  }
}
