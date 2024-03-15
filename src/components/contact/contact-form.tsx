'use client'

import { useForm } from 'react-hook-form'
import { ContactFormProps, ContactFormValues } from './contact-form.types'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { ContactFormField } from '@/components/contact/contact-form-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactSchema } from '@/schemas'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useState } from 'react'
import { ArrowRightCircle } from '@/components/ui/buttons/arrow-right-circle'
import { isEmailValid } from '@/lib/validation'
import { SocialInstagram } from '@/components/ui/icons/social-instagram'
import { SocialFacebook } from '@/components/ui/icons/social-facebook'
import { SocialLinkedin } from '@/components/ui/icons/social-linkedin'
import { ContactEmail } from '@/components/ui/icons/contact-email'
import { ContactPhone } from '@/components/ui/icons/contact-phone'
import { cn } from '@/lib/utils'

export const ContactForm = ({
  whatsapp,
  whatsappQr,
  instagram,
  facebook,
  linkedin,
  phoneUrl,
  phone,
}: ContactFormProps) => {
  const [isConsentVisible, setIsConsentVisible] = useState(false)
  const [isContactFormVisible, setIsContactFormVisible] = useState(false)
  const [isContactPhoneVisible, setIsContactPhoneVisible] = useState(false)

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

  const toggleContactForm = () => {
    setIsContactFormVisible((prevState) => !prevState)
  }

  const toggleContactPhone = () => {
    setIsContactPhoneVisible((prevState) => !prevState)
  }

  useEffect(() => {
    if (name && isEmailValid(email)) {
      setIsConsentVisible(true)
    } else {
      setIsConsentVisible(false)
    }
  }, [name, email])

  return (
    <div className={'flex flex-col justify-between h-full'}>
      <div className={'flex flex-col'}>
        <div className={'items-center w-fit'}>
          <p className={'text-sm text-center'}>{'WhatsApp'}</p>

          <div className={'w-20 h-20'}>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              {whatsappQr}
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

        <div className={'flex flex-col gap-1 mt-8'}>
          <a href={instagram} target={'_self'}>
            <SocialInstagram width={48} height={48} fill={'#999DAD'} />
          </a>

          <a href={facebook} target={'_self'}>
            <SocialFacebook width={48} height={48} fill={'#999DAD'} />
          </a>

          <a href={linkedin} target={'_self'}>
            <SocialLinkedin width={48} height={48} fill={'#999DAD'} />
          </a>

          <div onClick={toggleContactForm}>
            <ContactEmail
              width={48}
              height={48}
              fill={isContactFormVisible ? '#fff' : '#999DAD'}
            />
          </div>

          <div className={'flex flex-row justify-start items-center gap-4'}>
            <div onClick={toggleContactPhone}>
              <ContactPhone
                width={48}
                height={48}
                fill={isContactPhoneVisible ? '#fff' : '#999DAD'}
              />
            </div>
            <a
              href={phoneUrl}
              className={cn(
                isContactPhoneVisible ? '' : 'hidden',
                'font-bold text-xl'
              )}
            >
              {phone}
            </a>
          </div>
        </div>
      </div>

      {isContactFormVisible && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className={'space-y-4 flex flex-col p-4 bg-white/15'}>
              <ContactFormField
                className={'text-black'}
                name={'email'}
                placeholder={'Wpisz adres, np. jan.kowalski@mail.com'}
                type={'email'}
                control={form.control}
                disabled={false}
                autocomplete={'login-email'}
              />

              <div className={'pb-1 flex flex-row gap-4 items-start'}>
                <ContactFormField
                  className={'text-black flex-1'}
                  name={'name'}
                  placeholder={'Podaj imię, np. Janek Kowalski'}
                  type={'text'}
                  control={form.control}
                  disabled={false}
                  autocomplete={'login-email'}
                />

                <button type={'submit'} className={'mr-3 mt-1'}>
                  <ArrowRightCircle
                    width={32}
                    height={32}
                    fill={!consent ? '#666' : undefined}
                  />
                </button>
              </div>

              <p className={'text-sm !mt-0'}>
                {
                  'W ciągu najbliższych godzin skontaktuję się korzystając z podanego wyżej adresu.'
                }
              </p>

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
                        <FormLabel>Zgoda RODO</FormLabel>

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
      )}
    </div>
  )
}
