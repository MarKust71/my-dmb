import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import type { NextAuthConfig } from 'next-auth'
import bcrypt from 'bcryptjs'

import { getUserByEmail } from '@/data/auth/user'

export default {
  providers: [
    GitHub({
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
  ],
} satisfies NextAuthConfig
