'use clinet'

import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const AuthSocialButtons = () => {
  return (
    <div className={'flex items-center w-full gap-x-2'}>
      <Button
        size={'lg'}
        className={'w-full px-1'}
        variant={'outline'}
        onClick={() => {}}
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
