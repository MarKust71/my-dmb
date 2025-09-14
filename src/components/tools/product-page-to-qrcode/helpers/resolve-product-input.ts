import { normalizeAmwayUrl } from './normalize-amway-url'

export function resolveProductInput(input: string): string {
  const trimmed = input.trim()

  if (/^\d{4,6}$/.test(trimmed)) {
    // podano kod produktu – budujemy pełny adres
    return `https://www.amway.pl/p/${trimmed}`
  }

  return normalizeAmwayUrl(trimmed)
}
