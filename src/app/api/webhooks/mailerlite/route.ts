import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const payload = await req.json()
  const { type, subscriber: { id: subscriberId, email }, group: { id: groupId } } = payload

  // TODO: remove!
  // eslint-disable-next-line no-console
  console.log('%c payload: ', 'color: black; background-color: yellow', {type, subscriberId, email, groupId})

  return new NextResponse(JSON.stringify({type, subscriberId, email, groupId}), { status: 200 })
}
