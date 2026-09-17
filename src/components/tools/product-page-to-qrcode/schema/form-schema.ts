import { z } from 'zod'

export const FormSchema = z.object({
  aboSponsor: z.string().regex(/^\d+$/, 'Dozwolone są wyłącznie cyfry.'),
  linkUrl: z.string().min(1, 'Pole jest wymagane.'),
})
