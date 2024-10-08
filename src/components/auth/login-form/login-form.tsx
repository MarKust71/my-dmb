'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'

import { AuthCardWrapper } from '@/components/auth/auth-card-wrapper'
import { LoginSchema } from '@/schemas'
import { Form } from '@/components/ui/form'
import { AuthFormField } from '@/components/auth/auth-form-field'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/auth/form-error'
import { login } from '@/actions/auth/login'

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error)
      })
    })
  }

  return (
    <AuthCardWrapper
      headerLabel={'Welcome back'}
      backButtonLabel={"Don't have an account?"}
      backButtonHref={'/auth/register'}
      showSocialButtons
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
          <div className={'space-y-4'}>
            <AuthFormField
              name={'email'}
              label={'Email'}
              placeholder={'john.doe@example.com'}
              type={'email'}
              control={form.control}
              disabled={isPending}
              autocomplete={'login-email'}
            />

            <AuthFormField
              name={'password'}
              label={'Password'}
              placeholder={'********'}
              type={'password'}
              control={form.control}
              disabled={isPending}
              autocomplete={'current-password'}
            />
          </div>

          <FormError message={error || ''} />

          <Button type={'submit'} className={'w-full'} disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  )
}
