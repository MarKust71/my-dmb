import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const url = nextUrl.pathname

  const isApiAuthRoute = url.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(url) // || url.startsWith(url)
  const isAuthRoute = authRoutes.includes(url)

  if (isApiAuthRoute || isPublicRoute) {
    // Don't invoke Middleware on API Auth routes
    return null
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    return null
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return null
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
