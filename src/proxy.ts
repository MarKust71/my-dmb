// import { auth } from '@/auth'
import NextAuth from 'next-auth'

import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from '@/routes'
import authConfig from '@/auth.config'

const { auth } = NextAuth(authConfig)

export const proxy = auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const url = nextUrl.pathname

  const isApiAuthRoute = url.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(url) // || url.startsWith(url)
  const isAuthRoute = authRoutes.includes(url)

  if (isApiAuthRoute || isPublicRoute) {
    // Don't invoke Middleware on API Auth routes

    return
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    return
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }
})

// Optionally, don't invoke Proxy on some paths
/*
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
*/
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
