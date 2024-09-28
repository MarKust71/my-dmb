export async function POST(req: Request) {
  const payload = await req.json()

  // TODO: remove!
  // eslint-disable-next-line no-console
  console.log('%c payload: ', 'color: black; background-color: yellow', payload)

  return new Response(null, { status: 200 })
}
