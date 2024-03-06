'use client'

import { useForm } from 'react-hook-form'
import { ContactFormValues } from './contact-form.types'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { ArrowRightCircle, WaQrMarekKustosz } from '@/components/svgs'
import { ContactFormField } from '@/components/contact/contact-form-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactSchema } from '@/schemas'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useState } from 'react'

export const ContactForm = () => {
  const [isConsentVisible, setIsConsentVisible] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      name: '',
      gdprConsent: false,
    },
  })

  const { watch } = form
  const name = watch('name')
  const email = watch('email')
  const consent = watch('gdprConsent')

  const onSubmit = (values: ContactFormValues) => {
    if (consent) {
      // TODO: remove!
      // eslint-disable-next-line no-console
      console.log('%c onSubmit: ', 'color: black; background-color: yellow', {
        values,
      })
    }
  }

  useEffect(() => {
    if (name && email) {
      setIsConsentVisible(true)
    } else {
      setIsConsentVisible(false)
    }
  }, [name, email])

  return (
    <div className={'flex flex-col justify-between h-full'}>
      <div className={'flex flex-col items-center w-fit'}>
        <p className={'text-sm'}>{'WhatsApp'}</p>

        <div className={'w-20 h-20'}>
          <a
            href="https://wa.me/48600414149"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaQrMarekKustosz />
          </a>
        </div>

        <p className={'text-xs text-muted-foreground text-center'}>
          Zeskanuj
          <br />
          albo
          <br />
          kliknij kod
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={'space-y-1 flex flex-col'}>
            <p className={'text-sm'}>
              {
                'Skontaktuję sie z Tobą w ciągu kilku godzin, jeśli tylko dasz mi taką szansę. ☺️ Dziekuję ☺️'
              }
            </p>

            <ContactFormField
              className={'text-black'}
              name={'name'}
              placeholder={'Podaj imię, np. Janek Kowalski'}
              type={'text'}
              control={form.control}
              disabled={false}
              autocomplete={'login-email'}
            />

            <div className={'pb-1 flex flex-row gap-4 items-start'}>
              <ContactFormField
                className={'flex-1 text-black'}
                name={'email'}
                placeholder={'Wpisz adres, np. jan.kowalski@mail.com'}
                type={'email'}
                control={form.control}
                disabled={false}
                autocomplete={'login-email'}
              />

              <button type={'submit'} className={'mr-3 mt-1'}>
                <ArrowRightCircle />
              </button>
            </div>

            <div className={isConsentVisible ? '' : 'hidden'}>
              <FormField
                control={form.control}
                name="gdprConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        className={'border-gray-200'}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Wyrażam zgodę na przetwarzanie udostępnionych przeze
                        mnie danych osobowych.
                      </FormLabel>

                      <FormDescription>
                        Pełna treść udzielanej zgody{' '}
                        <Link href="/examples/forms" className={'font-bold'}>
                          TUTAJ
                        </Link>
                        .
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
