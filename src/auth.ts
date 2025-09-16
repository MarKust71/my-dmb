/*
import NextAuth, { Session } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { JWT } from 'next-auth/jwt'
// import { UserRole } from '@prisma/client'

import authConfig from '@/auth.config'
import { db } from '@/lib/db'
import { getUserById } from '@/data/auth/user'

enum UserRole {
  'USER',
  'ADMIN',
}

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
*/

// src/auth.ts  (CIĘŻKI – tylko dla Node.js runtime)
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import bcrypt from 'bcryptjs'

import authConfig from '@/auth.config'
import { getUserByEmail } from '@/data/auth/user'
// (opcjonalnie: import { LoginSchema } ...)

export const runtime = 'nodejs' // ważne: ten plik NIE trafi do Edge

const providers = [
  Github({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  }),
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),
  Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID!,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
  }),
  Credentials({
    async authorize(credentials) {
      const { email, password } = credentials as any // tu możesz użyć swojego LoginSchema
      const user = await getUserByEmail(email)
      if (!user || !user.password) return null
      const ok = await bcrypt.compare(password, user.password)

      return ok ? user : null
    },
  }),
]

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({ ...authConfig, providers })
