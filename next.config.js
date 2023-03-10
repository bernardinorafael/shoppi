/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: { styledComponents: true },
  images: { domains: ['files.stripe.com', 'lh3.googleusercontent.com'] },
}

module.exports = nextConfig
