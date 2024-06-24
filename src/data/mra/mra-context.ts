import { db } from '@/lib/db'

export const getMraContextByContextId = async (contextId: string) => {
  try {
    return await db.mraContext.findUnique({
      where: {
        contextId,
      },
    })
  } catch {
    return null
  }
}
