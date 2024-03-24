'use client'

import { useSession } from 'next-auth/react'

export const DashboardSessionBox = () => {
  const { data, status, update } = useSession()

  return (
    <>
      <h1>Session data:</h1>
      <div className={'my-4 px-4 text-balance'}>
        <p>{`${'id'}: ${data?.user?.id}`}</p>
        <p>{`${'email'}: ${data?.user?.email}`}</p>
        <p>{`${'name'}: ${data?.user?.name}`}</p>
        <p>{`${'image'}: ${data?.user?.image}`}</p>
        <p>{`${'status'}: ${status}`}</p>
        <p>{`${'expires'}: ${data?.expires}`}</p>

        <p className={'mt-4'}>{JSON.stringify(data)}</p>
      </div>
    </>
  )
}
