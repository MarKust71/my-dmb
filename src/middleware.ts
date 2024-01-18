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
  const isPublicRoute = publicRoutes.includes(url)
  const isAuthRoute = authRoutes.includes(url)

  if (isApiAuthRoute || isPublicRoute) {
    console.log('isApiAuthRoute || isPublicRoute')

    // Don't invoke Middleware on API Auth routes
    return null
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      console.log('isAuthRoute && isLoggedIn')

      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    console.log('isAuthRoute')

    return null
    // return Response.redirect(new URL('/auth/login', nextUrl))
  }

  if (!isLoggedIn) {
    console.log('!isLoggedIn')

    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  console.log('default')

  return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
