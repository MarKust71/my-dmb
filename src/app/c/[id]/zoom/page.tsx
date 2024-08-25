import { redirect } from 'next/navigation'

import { UserId, UserIdShort } from '@/components/contact/contact-form.types'

export default function Component({
  params: { id },
}: {
  params: { id: string }
}) {
  if (id === UserIdShort.MAREK_KUSTOSZ || id === UserId.MAREK_KUSTOSZ) {
    redirect(`/contact/${UserId.MAREK_KUSTOSZ}/zoom`)
  }

  if (id === UserIdShort.SYLWIA_STACHOW || id === UserId.SYLWIA_STACHOW) {
    redirect(`/contact/${UserId.SYLWIA_STACHOW}/zoom`)
  }

  redirect('/')
}
