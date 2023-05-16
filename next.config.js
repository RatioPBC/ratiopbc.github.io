/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
