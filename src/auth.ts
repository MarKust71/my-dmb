import NextAuth, { Session } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { JWT } from 'next-auth/jwt'
import { UserRole } from '@prisma/client'

import authConfig from '@/auth.config'
import { db } from '@/lib/db'
import { getUserById } from '@/data/auth/user'


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      if (!user.id) {
        return false
      }

      if (account?.provider !== 'credentials') {
        return true
      }

      const existingUser = await getUserById(user.id)

      // return !(!existingUser || !existingUser.emailVerified)
      return !!existingUser
    },
    async session(params) {
      const { session, token } = params as { session: Session; token: JWT }

      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole //TODO: Fix this - no 'as'
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token
      }

      const existingUser = await getUserById(token.sub)

      if (!existingUser) {
        return token
      }

      token.role = existingUser.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
