/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const JOIN_REDIRECT = '/join'
const GOOGLE_CALENDAR_REDIRECT = process.env.GOOGLE_CALENDAR_URL
const DIAMOND_EVENT_NEXT_REDIRECT = '/events/diamond-event/next'
const POWER_CAMPUS_REDIRECT = '/powercampus'
// const TOOLS_PRODUCT_PAGE_TO_QRCODE_REDIRECT = '/narzedzia/produkt-qr'
const MRA_FLYER_REDIRECT = '/products/mra/flyer'
const MRA_REGISTRATION_REDIRECT = '/products/mra/registration'
const MRA_REGISTRATION_GOOGLE_REDIRECT = 'https://forms.gle/XcSTsSE3j7kt9Umc7'
const MRA_REGISTRATION_GOOGLE_REDIRECT_WITH_CODE =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZ1K3DqajCsG6RqHcdoepz8WB2q0AqH9iDyCVGK0HOXWV0lg/viewform?entry.1682302562='
const N_FINANCE_REDIRECT = 'https://account.tapitag.co/230220241244$$NFMS'
const N_HOME_REDIRECT = 'https://account.tapitag.co/230220241244$$NFMS'
const MAILERLITE_MAREK_KUSTOSZ_LANDINGPAGE_REDIRECT =
  'https://subscribepage.io/marek-kustosz'
const MAILERLITE_BUSINESS_PLAN_LANDINGPAGE_REDIRECT =
  'https://subscribepage.io/business-plan'
const DEFAULT_REDIRECT = POWER_CAMPUS_REDIRECT

const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      ...[
        '/wolne-terminy',
        '/wolneterminy',
        '/umow-konsultacje',
        '/umowkonsultacje',
        '/available-slots',
        '/availableslots',
        '/kalendarz',
        '/calendar',
        '/terminy',
        '/slots',
      ].map((source) => ({
        source,
        destination: GOOGLE_CALENDAR_REDIRECT,
        permanent: true,
      })),
      ...[
        '/landing-page/marek-kustosz',
        '/landing-page/mk',
        '/lp/marek-kustosz',
        '/lp/mk',
      ].map((source) => ({
        source,
        destination: MAILERLITE_MAREK_KUSTOSZ_LANDINGPAGE_REDIRECT,
        permanent: true,
      })),
      ...[
        '/',
        '/api',
        '/auth',
        '/c',
        '/contact',
        '/i',
        '/invite',
        '/products',
        '/program',
        '/mra-reports',
      ].map((source) => ({
        source,
        destination: DEFAULT_REDIRECT,
        permanent: true,
      })),
      ...[
        '/events/diamond-event',
        '/events/de',
        '/e/diamond-event',
        '/e/de',
      ].map((source) => ({
        source,
        destination: DIAMOND_EVENT_NEXT_REDIRECT,
        permanent: true,
      })),
      ...[
        '/events/power-campus',
        '/events/pc',
        '/e/power-campus',
        '/e/pc',
        '/pc',
      ].map((source) => ({
        source,
        destination: POWER_CAMPUS_REDIRECT,
        permanent: true,
      })),
      {
        source: '/start',
        destination: JOIN_REDIRECT,
        permanent: true,
      },
      {
        source: '/business-plan',
        destination: MAILERLITE_BUSINESS_PLAN_LANDINGPAGE_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra/umow-test',
        destination: MRA_REGISTRATION_GOOGLE_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra/rejestracja',
        destination: MRA_REGISTRATION_GOOGLE_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra/rejestruj',
        destination: MRA_REGISTRATION_GOOGLE_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra/ulotka',
        destination: MRA_FLYER_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra/umow-test/:code',
        destination: `${MRA_REGISTRATION_GOOGLE_REDIRECT_WITH_CODE}:code`,
        permanent: true,
      },
      {
        source: '/mra/rejestracja/:code',
        destination: `${MRA_REGISTRATION_GOOGLE_REDIRECT_WITH_CODE}:code`,
        permanent: true,
      },
      {
        source: '/mra/rejestruj/:code',
        destination: `${MRA_REGISTRATION_GOOGLE_REDIRECT_WITH_CODE}:code`,
        permanent: true,
      },
      {
        source: '/nf',
        destination: '/n-finance',
        permanent: true,
      },
      {
        source: '/n-finance',
        destination: N_FINANCE_REDIRECT,
        permanent: false,
      },
      {
        source: '/nh',
        destination: '/n-home',
        permanent: true,
      },
      {
        source: '/n-home',
        destination: N_HOME_REDIRECT,
        permanent: false,
      },
      {
        source: '/e',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/mra-registration',
        destination: MRA_REGISTRATION_REDIRECT,
        permanent: true,
      },
      {
        source: '/narzedzia/produkt-qr',
        destination: '/tools/product-page-to-qrcode',
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
