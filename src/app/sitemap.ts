import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

const paths = [
  '/',
  '/join',
  '/events',
  '/events/biznes-espresso',
  '/events/breakfast-with-business',
  '/events/international-award-ceremony',
  '/events/diamond-live',
  '/program/energy-program',
  '/products/mra',
  '/products/mra/registration',
  '/products/artistry-holistic-promo',
  '/products/body-cleansing-program',
]

const sitemap = (): MetadataRoute.Sitemap =>
  paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
  }))

export default sitemap
