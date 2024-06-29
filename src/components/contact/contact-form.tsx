'use client'

import { useForm } from 'react-hook-form'
import {
  ContactFormProps,
  ContactFormValues,
  ContactType,
} from './contact-form.types'
import { Form } from '@/components/ui/form'
import { ContactFormField } from '@/components/contact/contact-form-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/schemas'
import { useEffect, useState, useTransition } from 'react'
import { ArrowRightCircle } from '@/components/ui/buttons/arrow-right-circle'
import { isEmailValid } from '@/lib/validation'
import { SocialInstagram } from '@/components/ui/icons/social-instagram'
import { SocialFacebook } from '@/components/ui/icons/social-facebook'
import { SocialLinkedin } from '@/components/ui/icons/social-linkedin'
import { ContactEmail } from '@/components/ui/icons/contact-email'
import { ContactPhone } from '@/components/ui/icons/contact-phone'
import { cn } from '@/lib/utils'
import { ContactWhatsApp } from '@/components/ui/icons/contact-whatsapp'
import { detectTouchScreenDevice } from '@/lib/is-touch-screen-device'
import { addCustomer } from '@/actions/contact/add-customer'
import { useToast } from '@/components/ui/use-toast'
import { ContactActiveEnum } from '@/types/contact.types'

export const ContactForm = ({
  userContext,
  whatsapp,
  whatsappQr,
  instagram,
  facebook,
  linkedin,
  phoneUrl,
  phone,
  active,
}: ContactFormProps) => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const [isConsentVisible, setIsConsentVisible] = useState(false)
  const [isContactFormVisible, setIsContactFormVisible] = useState(
    active === ContactActiveEnum.MAIL
  )
  const [isContactPhoneVisible, setIsContactPhoneVisible] = useState(
    active === ContactActiveEnum.PHONE
  )
  const [isContactWhatsAppVisible, setIsContactWhatsAppVisible] = useState(
    active === ContactActiveEnum.WHATSAPP
  )
  const [isContactEmailHover, setIsContactEmailHover] = useState(false)
  const [isContactPhoneHover, setIsContactPhoneHover] = useState(false)
  const [isContactWhatsAppHover, setIsContactWhatsAppHover] = useState(false)
  const [isContactInstagramHover, setIsContactInstagramHover] = useState(false)
  const [isContactFacebookHover, setIsContactFacebookHover] = useState(false)
  const [isContactLinkedinHover, setIsContactLinkedinHover] = useState(false)

  const isTouchScreenDevice = detectTouchScreenDevice()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      name: '',
      userContext,
      gdprConsent: false,
    },
  })

  const { watch } = form
  const name = watch('name')
  const email = watch('email')
  const consent = watch('gdprConsent')

  const onSuccess = (message: string) => {
    toast({
      className: 'font-bold justify-center bg-[#999DAD]',
      description: message,
      duration: 3000,
    })

    form.reset()
    setIsContactFormVisible(() => false)
  }

  const onSubmit = (values: ContactFormValues) => {
    // if (consent) {
    if (name && email) {
      startTransition(() => {
        addCustomer({ ...values, context: values.userContext }).then((data) => {
          if (data.error) {
            toast({
              className: 'font-bold justify-center',
              description: data.error,
              duration: 3000,
              variant: 'destructive',
            })

            return
          }

          if (data.success) {
            onSuccess(data.success)
          }
        })
      })
    }
  }

  const toggleContactForm = () => {
    setIsContactPhoneVisible(() => false)
    setIsContactWhatsAppVisible(() => false)
    setIsContactFormVisible((prevState) => !prevState)
  }

  const toggleContactPhone = () => {
    setIsContactFormVisible(() => false)
    setIsContactWhatsAppVisible(() => false)
    setIsContactPhoneVisible((prevState) => !prevState)
  }

  const toggleContactWhatsApp = () => {
    setIsContactFormVisible(() => false)
    setIsContactPhoneVisible(() => false)
    setIsContactWhatsAppVisible((prevState) => !prevState)
  }

  const onHover = (type: ContactType, state: boolean) => {
    if (type === ContactType.EMAIL) {
      setIsContactEmailHover(state)
    }
    if (type === ContactType.PHONE) {
      setIsContactPhoneHover(state)
    }
    if (type === ContactType.WHATSAPP) {
      setIsContactWhatsAppHover(state)
    }
    if (type === ContactType.INSTAGRAM) {
      setIsContactInstagramHover(state)
    }
    if (type === ContactType.FACEBOOK) {
      setIsContactFacebookHover(state)
    }
    if (type === ContactType.LINKEDIN) {
      setIsContactLinkedinHover(state)
    }
  }

  useEffect(() => {
    if (name && isEmailValid(email)) {
      setIsConsentVisible(true)
    } else {
      setIsConsentVisible(false)
    }
  }, [name, email])

  return (
    <div className={'flex flex-col justify-between'}>
      <div className={'flex flex-col'}>
        <div className={'flex flex-col gap-1 mt-8'}>
          <div className={'flex flex-row justify-start items-end gap-4'}>
            <div
              onClick={toggleContactWhatsApp}
              className={'cursor-pointer'}
              onMouseEnter={() =>
                onHover(ContactType.WHATSAPP, !isTouchScreenDevice)
              }
              onMouseLeave={() => onHover(ContactType.WHATSAPP, false)}
            >
              <ContactWhatsApp
                width={48}
                height={48}
                fill={
                  isContactWhatsAppVisible || isContactWhatsAppHover
                    ? '#fff'
                    : '#999DAD'
                }
              />
            </div>

            {isContactWhatsAppVisible && (
              <div
                className={
                  'flex flex-row items-center w-fit gap-4 bg-black/50 pr-4'
                }
              >
                <div className={'w-20 h-20 cursor-pointer'}>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    {whatsappQr}
                  </a>
                </div>

                <p className={'text-xs text-center'}>
                  Zeskanuj
                  <br />
                  albo
                  <br />
                  kliknij kod
                </p>
              </div>
            )}
          </div>

          <div className={'flex flex-row justify-start items-center gap-4'}>
            <div
              onClick={toggleContactPhone}
              className={'cursor-pointer'}
              onMouseEnter={() =>
                onHover(ContactType.PHONE, !isTouchScreenDevice)
              }
              onMouseLeave={() => onHover(ContactType.PHONE, false)}
            >
              <ContactPhone
                width={48}
                height={48}
                fill={
                  isContactPhoneVisible || isContactPhoneHover
                    ? '#fff'
                    : '#999DAD'
                }
              />
            </div>

            <a
              href={phoneUrl}
              className={cn(
                isContactPhoneVisible ? '' : 'hidden',
                'font-bold text-xl p-2 bg-black/50'
              )}
            >
              {phone}
            </a>
          </div>

          <a
            href={instagram}
            target={'_self'}
            onMouseEnter={() =>
              onHover(ContactType.INSTAGRAM, !isTouchScreenDevice)
            }
            onMouseLeave={() => onHover(ContactType.INSTAGRAM, false)}
          >
            <SocialInstagram
              width={48}
              height={48}
              fill={isContactInstagramHover ? '#fff' : '#999DAD'}
            />
          </a>

          <a
            href={facebook}
            target={'_self'}
            onMouseEnter={() =>
              onHover(ContactType.FACEBOOK, !isTouchScreenDevice)
            }
            onMouseLeave={() => onHover(ContactType.FACEBOOK, false)}
          >
            <SocialFacebook
              width={48}
              height={48}
              fill={isContactFacebookHover ? '#fff' : '#999DAD'}
            />
          </a>

          <a
            href={linkedin}
            target={'_self'}
            onMouseEnter={() =>
              onHover(ContactType.LINKEDIN, !isTouchScreenDevice)
            }
            onMouseLeave={() => onHover(ContactType.LINKEDIN, false)}
          >
            <SocialLinkedin
              width={48}
              height={48}
              fill={isContactLinkedinHover ? '#fff' : '#999DAD'}
            />
          </a>

          <div className={'flex flex-row justify-start items-start gap-4'}>
            <div
              onClick={toggleContactForm}
              className={'cursor-pointer'}
              onMouseEnter={() =>
                onHover(ContactType.EMAIL, !isTouchScreenDevice)
              }
              onMouseLeave={() => onHover(ContactType.EMAIL, false)}
            >
              <ContactEmail
                width={48}
                height={48}
                fill={
                  isContactFormVisible || isContactEmailHover
                    ? '#fff'
                    : '#999DAD'
                }
              />
            </div>

            {isContactFormVisible && (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={'w-full'}
                >
                  <div className={'space-y-4 flex flex-col p-4 bg-black/50'}>
                    <p className={'text-sm'}>
                      {'Zapraszam do szybkiego kontaktu'}
                    </p>

                    <ContactFormField
                      className={'text-black'}
                      name={'email'}
                      placeholder={'E-mail, np. jan.kowalski@mail.com'}
                      type={'email'}
                      control={form.control}
                      disabled={isPending}
                      autocomplete={'login-email'}
                    />

                    <div className={'pb-1 flex flex-row gap-4 items-start'}>
                      <ContactFormField
                        className={'text-black flex-1'}
                        name={'name'}
                        placeholder={'Imię, np. Janek Kowalski'}
                        type={'text'}
                        control={form.control}
                        disabled={isPending}
                        autocomplete={'login-email'}
                      />

                      <button
                        type={'submit'}
                        className={'mr-3 mt-1'}
                        disabled={isPending}
                      >
                        <ArrowRightCircle
                          width={32}
                          height={32}
                          // fill={!consent ? '#666' : undefined}
                          fill={
                            !name || !email || isPending ? '#666' : undefined
                          }
                        />
                      </button>
                    </div>

                    {/*
                    {isContactFormVisible && (
                      <ContactConsentForm control={form.control} disabled={isPending} />
                    )}
*/}
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
