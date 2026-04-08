/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Only enable static export for production builds
  // This allows hot reloading to work properly in development
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export', // Tells Next to produce a static export (out/)
  }),
}

module.exports = nextConfig
