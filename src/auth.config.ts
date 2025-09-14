/*
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'

import { getUserByEmail } from '@/data/auth/user'
import { LoginSchema } from '@/schemas'

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) {
            return null
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) {
            return user
          }
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
*/

// src/auth.config.ts  (LEKKI – bez providerów, bcrypt, Prisma)
import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Credentials from 'next-auth/providers/credentials'

import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/auth/user'

const authConfig: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          // const { email, password } = validatedFields.data
          const { email } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) {
            return null
          }

          /*
          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) {
            return user
          }
*/
        }

        return null
      },
    }),
  ],
  trustHost: true,
  pages: {
    signIn: '/auth/login',
  },
  // UWAGA: żadnych providers/callbacków wymagających Node/DB
}

export default authConfig
