import { redirect } from 'next/navigation'

import { UserId, UserIdShort } from '@/components/contact/contact-form.types'
import type { PageProps } from '@/types'

import { PageParams } from './page.types'

export default async function Component({
  params,
  searchParams,
}: PageProps<PageParams>) {
  const { id } = await params
  const sp = await searchParams

  const activeValue = Array.isArray(sp?.active) ? sp.active[0] : sp?.active
  const searchString = activeValue ? `?active=${activeValue}` : ''

  if (id === UserIdShort.MAREK_KUSTOSZ || id === UserId.MAREK_KUSTOSZ) {
    redirect(`/contact/${UserId.MAREK_KUSTOSZ}${searchString}`)
  }
  if (id === UserIdShort.SYLWIA_STACHOW || id === UserId.SYLWIA_STACHOW) {
    redirect(`/contact/${UserId.SYLWIA_STACHOW}${searchString}`)
  }
  redirect('/')
}
