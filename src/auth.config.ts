import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/auth/user'
import bcrypt from 'bcryptjs'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      /*
      authorization: {
        params: {
          access_type: 'offline',
          prompt: 'consent',
          response_type: 'code',
        },
      },
*/
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      /*
      idToken: true,
      authorization: {
        url: 'https://www.facebook.com/v11.0/dialog/oauth',
        params: {
          client_id: process.env.FACEBOOK_CLIENT_ID,
          scope: 'openid email',
          response_type: 'code',
        },
      },
      token: {
        url: 'https://graph.facebook.com/oauth/access_token',
        async request(context) {
          const url =
            `https://graph.facebook.com/oauth/access_token` +
            `?code=${context.params.code}` +
            `&client_id=${context.provider.clientId}` +
            `&redirect_uri=${context.provider.callbackUrl}` +
            `&client_secret=${context.provider.clientSecret}`
          const response = await fetch(url)
          const tokens = await response.json()
          return { tokens }
        },
      },
*/
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
