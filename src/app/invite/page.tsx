import { redirect } from 'next/navigation'
import { DEFAULT_REDIRECT } from '@/routes'

export default function Component() {
  redirect(DEFAULT_REDIRECT)
}
