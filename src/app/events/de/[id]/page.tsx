import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { PageProps } from '@/types'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  return {
    title: `dMb Global | Diamond Event | ${id}`,
  }
}

export default async function Component({ params }: PageProps<PageParams>) {
  const { id } = await params

  if (id) {
    redirect(`/events/diamond-event/${id}`)
  }

  redirect('/')
}
