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

export const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      name: '',
      gdprConsent: false,
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    // TODO: remove!
    // eslint-disable-next-line no-console
    console.log('%c onSubmit: ', 'color: black; background-color: yellow', {
      values,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6'}>
        <div className={'space-y-4 flex flex-col'}>
          <p>{'Zostaw mi, proszę, swoje imię i adres e-mail.'}</p>

          <p className={'!mt-0'}>{'Odezwę się w ciągu najbliższych godzin.'}</p>

          <ContactFormField
            className={'text-black'}
            name={'name'}
            placeholder={'John Doe'}
            type={'text'}
            control={form.control}
            disabled={false}
            autocomplete={'login-email'}
          />

          <div className={'pb-1 flex flex-row gap-4 items-start'}>
            <ContactFormField
              className={'flex-1 text-black'}
              name={'email'}
              placeholder={'john.doe@example.com'}
              type={'email'}
              control={form.control}
              disabled={false}
              autocomplete={'login-email'}
            />

            <button type={'submit'} className={'mr-3 mt-1'}>
              <ArrowRightCircle />
            </button>
          </div>

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
                    Wyrażam zgodę na przetwarzanie udostępnionych przeze mnie
                    danych osobowych.
                  </FormLabel>

                  <FormDescription>
                    <Link href="/examples/forms">Pełna treść</Link> udzielanej
                    zgody.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <div className={'flex flex-col items-center'}>
            <p>{'Możesz też skorzystać z WhatsApp'}</p>

            <div className={'w-20 h-20 mt-2'}>
              <WaQrMarekKustosz />
            </div>

            <p className={'text-sm text-muted-foreground'}>
              Zeskanuj albo kliknij kod
            </p>
          </div>
        </div>
      </form>
    </Form>
  )
}
