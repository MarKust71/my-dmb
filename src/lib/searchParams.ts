// Prosty, modułowy helper — bez augmentacji globalnej
export type SearchParamValue = string | string[] | undefined

export const one = (v: SearchParamValue): string | undefined =>
  Array.isArray(v) ? v[0] : v
