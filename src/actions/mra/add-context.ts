'use server'

import { MraContextSchema } from '@/schemas'
import { z } from 'zod'
import { db } from '@/lib/db'
import { getMraContextByContextId } from '@/data/mra/mra-context'

export const addContext = async (data: z.infer<typeof MraContextSchema>) => {
  const validatedFields = MraContextSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { contextId, name } = validatedFields.data

  const existingContext = await getMraContextByContextId(contextId)

  if (existingContext) {
    return { error: 'Context already exists!' }
  }

  await db.mraContext.create({
    data: {
      contextId,
      name,
    },
  })

  return { success: 'MRA Context added!' }
}
