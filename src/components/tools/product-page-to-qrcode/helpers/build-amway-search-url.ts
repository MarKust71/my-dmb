const AMWAY_SEARCH_URL = 'https://www.amway.pl/search?text='

export function buildAmwaySearchUrl(text: string): string {
  const query = text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => encodeURIComponent(word))
    .join('+')

  return `${AMWAY_SEARCH_URL}${query}`
}
