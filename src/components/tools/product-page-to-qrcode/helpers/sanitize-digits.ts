export function sanitizeDigits(value: string): string {
  return value.replace(/\D/g, '')
}
