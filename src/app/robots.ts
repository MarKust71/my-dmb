import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/', '/auth/', '/dashboard', '/contact/', '/ml/'],
  },
  sitemap: `${SITE_URL}/sitemap.xml`,
})

export default robots
