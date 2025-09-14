export function normalizeAmwayUrl(input: string): string {
  const url = new URL(input)

  if (url.origin === 'https://www.amway.pl' && url.pathname.includes('/p/')) {
    const idx = url.pathname.indexOf('/p/')
    url.pathname = url.pathname.slice(idx) // od "/p/" do końca
  }

  return url.toString()
}
