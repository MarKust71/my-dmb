export function buildUrlWithAbo(baseUrl: string, aboSponsor: string): string {
  const url = new URL(baseUrl)
  url.searchParams.set('aboSponsor', aboSponsor)

  return url.toString()
}
