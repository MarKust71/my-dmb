'use client'

import { useForm, UseFormReturn } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'

import { AuthCardWrapper } from '@/components/auth/auth-card-wrapper'
import { RegisterSchema } from '@/schemas'
import { Form } from '@/components/ui/form'
import { AuthFormField } from '@/components/auth/auth-form-field'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/auth/form-error'
import { register } from '@/actions/auth/register'

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
      })
    })
  }

  return (
    <AuthCardWrapper
      headerLabel={'Create an account'}
      backButtonLabel={'Already have an account?'}
      backButtonHref={'/auth/login'}
      showSocialButtons
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
          <div className={'space-y-4'}>
            <AuthFormField
              name={'name'}
              label={'Name'}
              placeholder={'John Doe'}
              type={'text'}
              control={form.control}
              disabled={isPending}
            />

            <AuthFormField
              name={'email'}
              label={'Email'}
              placeholder={'john.doe@example.com'}
              type={'email'}
              control={form.control}
              disabled={isPending}
            />

            <AuthFormField
              name={'password'}
              label={'Password'}
              placeholder={'******'}
              type={'password'}
              control={form.control}
              disabled={isPending}
            />
          </div>

          <FormError message={error || ''} />

          <Button type={'submit'} className={'w-full'} disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  )
}
