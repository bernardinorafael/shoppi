/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ['files.stripe.com'],
  },
}

module.exports = nextConfig
