import { z } from 'zod'

export const FormSchema = z.object({
  aboSponsor: z.string().regex(/^\d+$/, 'Dozwolone są wyłącznie cyfry.'),
  linkUrl: z.union([
    z.url(
      'Podaj poprawny adres URL (z http/https) ALBO 4-6 cyfr kodu produktu'
    ),
    z
      .string()
      .regex(
        /^\d{4,6}$/,
        'Wpisz 4–6 cyfr kodu produktu ALBO poprawny adres URL (z http/https)'
      ),
  ]),
})
