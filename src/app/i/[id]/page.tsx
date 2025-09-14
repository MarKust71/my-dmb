import { redirect } from 'next/navigation'

import { PageProps } from '@/types'

import { PageParams } from './page.types'

export default async function Component({ params }: PageProps<PageParams>) {
  const { id } = await params

  if (id) {
    redirect(`/invite/${id}`)
  }

  redirect('/')
}
