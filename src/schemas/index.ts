import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Valid email address is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
})

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required',
  }),
  email: z.string().email({
    message: 'Valid email address is required',
  }),
  password: z.string().min(6, {
    message: 'At least 6 characters required',
  }),
})

export const ContactFormSchema = z.object({
  email: z.string().email({
    message: 'To nie jest poprawny email',
  }),
  name: z.string().min(1, {
    message: 'Podanie imienia jest wymagane',
  }),
  userContext: z.string(),
  gdprConsent: z.boolean().default(false),
})

export const ContactCustomerSchema = z.object({
  name: z.string().min(1, {
    message: 'name is required',
  }),
  email: z.string().email({
    message: 'Valid email address is required',
  }),
  context: z.string(),
  consent: z.string().datetime().optional(),
})
