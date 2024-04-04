import { UserId, UserIdShort } from '@/components/contact/contact-form.types'

export const publicRoutes = [
  '/',
  '/body-cleansing-program',
  '/artistry-holistic-promo',
  `/contact/${UserId.MAREK_KUSTOSZ}`,
  `/contact/${UserId.SYLWIA_STACHOW}`,
  `/c/${UserIdShort.MAREK_KUSTOSZ}`,
  `/c/${UserIdShort.SYLWIA_STACHOW}`,
]

export const authRoutes = ['/auth/login', '/auth/register']

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
