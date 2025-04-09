/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true, // if using styled-components
  },
  experimental: {
    appDir: true, // if using App Router
  }
}

module.exports = nextConfig