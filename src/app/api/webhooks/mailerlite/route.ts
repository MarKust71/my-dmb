import { NextResponse } from 'next/server'

import { addSubscriber } from '@/actions/mailerlite/add-subscriber'

export async function POST(req: Request) {
  const payload = await req.json()

  // TODO: remove!
  // eslint-disable-next-line no-console
  console.log('%c', 'color: black; background-color: yellow', { payload: JSON.stringify(payload, null, 2) })

  const { type, subscriber: { id: subscriberId, email, fields: { name } }, group: { id: groupId } } = payload

  const result = await addSubscriber(
    { email, mailerLiteId: subscriberId, name }
  )

  if (result.error) {
    console.error({ error: result.error })

    return new NextResponse(
      JSON.stringify({ error: result.error }), { status: 400 }
    )
  }

  return new NextResponse(
    JSON.stringify({ type, subscriberId, email, groupId }),
    { status: 201 }
  )
}
