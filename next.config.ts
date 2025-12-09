import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'superbryn.com',
      },
      {
        protocol: 'https',
        hostname: 'ca.slack-edge.com',
      },
    ],
  },
}

export default nextConfig

