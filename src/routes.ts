import { UserId, UserIdShort } from '@/components/contact/contact-form.types'

export const publicRoutes = [
  '/',
  '/api/webhooks/mailerlite', // TODO: secure it later!
  '/artistry-holistic-promo',
  '/body-cleansing-program',
  '/c',
  `/c/${UserIdShort.MAREK_KUSTOSZ}`,
  `/c/${UserIdShort.SYLWIA_STACHOW}`,
  `/contact/${UserId.MAREK_KUSTOSZ}`,
  `/contact/${UserId.SYLWIA_STACHOW}`,
  `/c/${UserIdShort.MAREK_KUSTOSZ}/zoom`,
  `/c/${UserIdShort.SYLWIA_STACHOW}/zoom`,
  `/contact/${UserId.MAREK_KUSTOSZ}/zoom`,
  `/contact/${UserId.SYLWIA_STACHOW}/zoom`,
  '/e',
  '/e/be',
  '/e/bwb',
  '/e/de',
  '/e/de/20240616',
  '/e/de/n',
  '/e/de/next',
  '/e/diamond-event',
  '/e/diamond-event/n',
  '/e/diamond-event/next',
  '/e/dl',
  '/e/iac',
  '/events',
  '/events/biznes-espresso',
  '/events/be',
  '/events/breakfast-with-business',
  '/events/bwb',
  '/events/diamond-event',
  '/events/de',
  '/events/diamond-event/20240616',
  '/events/diamond-event/n',
  '/events/diamond-event/next',
  '/events/diamond-live',
  '/events/dl',
  '/events/international-award-ceremony',
  '/events/iac',
  '/i',
  '/invite',
  '/media/business-plan',
  '/mra-registration',
  '/mra-reports',
  '/products',
  '/products/mra/registration',
  '/program',
  '/program/energy-program',
]

export const DEFAULT_REDIRECT = '/contact/marek-kustosz'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'

export const authRoutes = ['/auth/login', '/auth/register']

export const apiAuthPrefix = '/api/auth'
