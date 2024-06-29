import { redirect } from 'next/navigation'
import { UserId, UserIdShort } from '@/components/contact/contact-form.types'

export default function Component({
  params: { id },
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const searchString = searchParams.active
    ? `?active=${searchParams.active}`
    : ''

  if (id === UserIdShort.MAREK_KUSTOSZ) {
    redirect(`/contact/${UserId.MAREK_KUSTOSZ}${searchString}`)
  }

  if (id === UserIdShort.SYLWIA_STACHOW) {
    redirect(`/contact/${UserId.SYLWIA_STACHOW}${searchString}`)
  }

  redirect('/')
}
