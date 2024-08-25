'use client'

import { useSession } from 'next-auth/react'

import { DashboardSessionBoxProps } from '@/components/dashboard/dashboard-session-box.types'

export const DashboardSessionBox = ({ session }: DashboardSessionBoxProps) => {
  const { data, status, update } = useSession()

  return (
    <>
      <h1>Session data:</h1>

      <div className={'my-4 px-4 text-balance'}>
        <p>{`${'id'}: ${data?.user?.id}`}</p>
        <p>{`${'email'}: ${data?.user?.email}`}</p>
        <p>{`${'name'}: ${data?.user?.name}`}</p>
        <p>{`${'role'}: ${data?.user?.role}`}</p>
        <p>{`${'image'}: ${data?.user?.image}`}</p>
        <p>{`${'status'}: ${status}`}</p>
        <p>{`${'expires'}: ${data?.expires}`}</p>
      </div>

      <div className={'my-4 px-4 text-balance'}>
        <p>{`${'id'}: ${session?.user?.id}`}</p>
        <p>{`${'email'}: ${session?.user?.email}`}</p>
        <p>{`${'name'}: ${session?.user?.name}`}</p>
        <p>{`${'role'}: ${session?.user?.role}`}</p>
        <p>{`${'image'}: ${session?.user?.image}`}</p>
        <p>{`${'expires'}: ${session?.expires}`}</p>
      </div>
    </>
  )
}
