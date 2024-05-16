import { DefaultSession } from 'next-auth'
import { DefaultJWT } from '@auth/core/jwt'
import { UserRole } from '@prisma/client'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
}

export type ExtendedToken = DefaultJWT & {
  role: UserRole
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: ExtendedToken
  }
}
