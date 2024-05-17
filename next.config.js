/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const DEFAULT_REDIRECT = '/'

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
      {
        source: '/api',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/auth',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/nf',
        destination: '/n-finance',
        permanent: true,
      },
      {
        source: '/n-finance',
        destination: 'https://account.tapitag.co/230220241244$$NFMS',
        permanent: false,
      },
      {
        source: '/nh',
        destination: '/n-home',
        permanent: true,
      },
      {
        source: '/n-home',
        destination: 'https://account.tapitag.co/230220241244$$NFMS',
        permanent: false,
      },
      {
        source: '/c',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/contact',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/e',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/events',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/i',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/invite',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/products',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
      {
        source: '/mra-reports',
        destination: DEFAULT_REDIRECT,
        permanent: true,
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
