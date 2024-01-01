import Image from 'next/image'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function Home() {
  return (
    <MaxWidthWrapper
      className={
        'mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'
      }
    >
      <div
        className={
          'mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'
        }
      >
        <p className={'text-sm font-semibold text-gray-700'}>my-dmb works!</p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: '',
          })}
          href={'/body-cleansing-program'}
          target={'_blank'}
        >
          Get started <ArrowRight className={'w-5 h-5 ml-2'} />
        </Link>

        <LoginLink>Sign in</LoginLink>

        <RegisterLink>Sign up</RegisterLink>
      </div>
    </MaxWidthWrapper>
  )
}
