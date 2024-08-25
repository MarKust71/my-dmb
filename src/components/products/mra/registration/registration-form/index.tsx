'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from '@/components/ui/use-toast'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { MraRegistrationFormSchema } from '@/schemas'
import { FieldLastName } from '@/components/products/mra/registration/registration-form/field-last-name'
import { FieldFirstName } from '@/components/products/mra/registration/registration-form/field-first-name'
import { FieldEmail } from '@/components/products/mra/registration/registration-form/field-email'
import { FieldPhone } from '@/components/products/mra/registration/registration-form/field-phone'
import { FieldPostcode } from '@/components/products/mra/registration/registration-form/field-postcode'
import { FieldCity } from '@/components/products/mra/registration/registration-form/field-city'
import { FieldAddress } from '@/components/products/mra/registration/registration-form/field-address'
import { FieldBirthDate } from '@/components/products/mra/registration/registration-form/field-birth-date'
import { FieldHeight } from '@/components/products/mra/registration/registration-form/field-height'
import { FieldWeight } from '@/components/products/mra/registration/registration-form/field-weight'

export const MraRegistrationForm = () => {
  const form = useForm<z.infer<typeof MraRegistrationFormSchema>>({
    resolver: zodResolver(MraRegistrationFormSchema),
    defaultValues: {
      lastname: '',
      firstname: '',
      email: '',
      phone: '',
      postcode: '',
      city: '',
      address: '',
      birthDate: '',
      height: '',
      weight: '',
    },
  })

  function onSubmit(data: z.infer<typeof MraRegistrationFormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 mx-auto space-y-3"
      >
        <FieldLastName form={form} />

        <FieldFirstName form={form} />

        <FieldEmail form={form} />

        <FieldPhone form={form} />

        <FieldPostcode form={form} />

        <FieldCity form={form} />

        <FieldAddress form={form} />

        <FieldBirthDate form={form} />

        <FieldHeight form={form} />

        <FieldWeight form={form} />

        <Button type="submit">Zapisz</Button>
      </form>
    </Form>
  )
}
