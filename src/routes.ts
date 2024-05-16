import { UserId, UserIdShort } from '@/components/contact/contact-form.types'

export const publicRoutes = [
  '/',
  '/artistry-holistic-promo',
  '/body-cleansing-program',
  '/c',
  '/e',
  '/e/bwb',
  '/e/dl',
  '/e/iac',
  '/events',
  '/events/breakfast-with-business',
  '/events/diamond-live',
  '/events/international-award-ceremony',
  '/i',
  '/invite',
  `/c/${UserIdShort.MAREK_KUSTOSZ}`,
  `/c/${UserIdShort.SYLWIA_STACHOW}`,
  `/contact/${UserId.MAREK_KUSTOSZ}`,
  `/contact/${UserId.SYLWIA_STACHOW}`,
  '/mra-reports',
  '/products',
]

export const DEFAULT_REDIRECT = '/contact/marek-kustosz'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'

export const authRoutes = ['/auth/login', '/auth/register']

export const apiAuthPrefix = '/api/auth'
