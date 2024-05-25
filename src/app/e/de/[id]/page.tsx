import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `dMb Global | Diamond Event | ${id}`,
  }
}

type Props = {
  params: { id: string }
}

export default function Component({ params: { id } }: Props) {
  if (id) {
    redirect(`/events/diamond-event/${id}`)
  }

  redirect('/')
}
