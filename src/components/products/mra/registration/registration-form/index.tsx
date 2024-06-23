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

export const MraRegistrationForm = () => {
  const form = useForm<z.infer<typeof MraRegistrationFormSchema>>({
    resolver: zodResolver(MraRegistrationFormSchema),
    defaultValues: {
      lastname: '',
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FieldLastName form={form} />

        <FieldFirstName form={form} />

        <Button type="submit">Zapisz</Button>
      </form>
    </Form>
  )
}
