'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

enum SocialProvider {
  GOOGLE = 'google',
  GITHUB = 'github',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
}

export const AuthSocialButtons = () => {
  const handleClick = (provider: 'google' | 'github' | 'facebook') => {
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
        onClick={() => handleClick(SocialProvider.GOOGLE)}
      >
        <FcGoogle className={'h-5 w-5'} />
      </Button>

      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => handleClick(SocialProvider.GITHUB)}
      >
        <FaGithub className={'h-5 w-5'} />
      </Button>

      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => handleClick(SocialProvider.FACEBOOK)}
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
