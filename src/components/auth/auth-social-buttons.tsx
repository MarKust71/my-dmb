'use clinet'

import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const AuthSocialButtons = () => {
  const handleClick = (provider: 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className={'flex items-center w-full gap-x-2'}>
      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => handleClick('google')}
      >
        <FcGoogle className={'h-5 w-5'} />
      </Button>

      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => {}}
      >
        <FaFacebook className={'h-5 w-5'} />
      </Button>

      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => {}}
      >
        <FaXTwitter className={'h-5 w-5'} />
      </Button>

      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => {}}
      >
        <FaInstagram className={'h-5 w-5'} />
      </Button>
    </div>
  )
}
