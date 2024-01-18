import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import { signOut } from '@/auth'

const { auth } = NextAuth(authConfig)

// import { auth } from '@/auth'

const DashboardPage = async () => {
  const session = await auth()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(session)}</p>

      <form
        action={async () => {
          'use server'

          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}

export default DashboardPage
