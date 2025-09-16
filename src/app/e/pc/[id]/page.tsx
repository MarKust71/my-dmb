import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import type { PageProps } from '@/types'

import { PageParams } from './page.types'

export async function generateMetadata({
  params,
}: PageProps<PageParams>): Promise<Metadata> {
  const { id } = await params

  return {
    title: `dMb Global | PowerCampus | ${id}`,
  }
}

export default async function Component({ params }: PageProps<PageParams>) {
  const { id } = await params

  if (id) {
    redirect(`/events/power-campus/${id}`)
  }

  redirect('/')
}
