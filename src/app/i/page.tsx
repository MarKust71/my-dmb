import { redirect } from 'next/navigation'

export default function Component({
  params: { id },
}: {
  params: { id: string }
}) {
  if (id) {
    redirect(`/invite/${id}`)
  }

  redirect('/')
}
