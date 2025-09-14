import { redirect } from 'next/navigation'

import { UserId, UserIdShort } from '@/components/contact/contact-form.types'
import type { PageProps } from '@/types'

import { PageParams } from './page.types'

export default async function Component({ params }: PageProps<PageParams>) {
  const { id } = await params

  if (id === UserIdShort.MAREK_KUSTOSZ || id === UserId.MAREK_KUSTOSZ) {
    redirect(`/contact/${UserId.MAREK_KUSTOSZ}/zoom`)
  }

  if (id === UserIdShort.SYLWIA_STACHOW || id === UserId.SYLWIA_STACHOW) {
    redirect(`/contact/${UserId.SYLWIA_STACHOW}/zoom`)
  }

  redirect('/')
}
