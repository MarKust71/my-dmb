'use client'

import { useSession } from 'next-auth/react'

export const DashboardSessionBox = () => {
  const session = useSession()

  return <p>{JSON.stringify(session)}</p>
}
