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

export const MraRegistrationFormSchema = z.object({
  lastname: z.string().min(2, {
    message: 'Nazwisko musi mieć co najmniej dwa znaki.',
  }),
  firstname: z.string().min(2, {
    message: 'Imię musi mieć co najmniej dwa znaki.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Adres email jest wymagany.',
    })
    .email('To nie jest prawidłowy adres email.'),
  phone: z.string().min(9, {
    message: 'Numer telefonu musi mieć co najmniej 9 znaków.',
  }),
  postcode: z
    .string()
    .min(5, {
      message: 'Kod pocztowy musi mieć co najmniej 5 znaków.',
    })
    .refine((value) => /^[0-9]{2}-[0-9]{3}$/.test(value ?? ''), {
      message: 'Kod pocztowy musi mieć postać ##-###.',
    }),
  city: z.string().optional(),
  address: z.string().optional(),
  birthDate: z
    .string()
    .refine((value) => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value ?? ''), {
      message: 'Data urodzenia musi mieć postać RRRR-MM-DD.',
    })
    .optional(),
  height: z
    .string()
    .refine((value) => /^[0-9]{2,3}$/.test(value ?? ''), {
      message: 'Wzrost może być tylko dwu albo trzycyfrowy.',
    })
    .refine((value) => parseInt(value, 10) >= 60, {
      message: 'Minimalny wzrost to 60 cm.',
    })
    .refine((value) => parseInt(value, 10) <= 300, {
      message: 'Maksymalny wzrost to 300 cm.',
    })
    .optional(),
  weight: z
    .string()
    .refine((value) => /^[0-9]{2,3}$/.test(value ?? ''), {
      message: 'Waga może być tylko dwu albo trzycyfrowa.',
    })
    .refine((value) => parseInt(value, 10) >= 30, {
      message: 'Minimalna waga to 30 kg.',
    })
    .refine((value) => parseInt(value, 10) <= 200, {
      message: 'Maksymalna waga to 200 kg.',
    })
    .optional(),
})
