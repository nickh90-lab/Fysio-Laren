import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.behold.pictures',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sportis',
        destination: '/fysiofit',
        permanent: true,
      },
      {
        source: '/fysiofitness',
        destination: '/fysiofit',
        permanent: true,
      },
      {
        source: '/groepstrainingen',
        destination: '/gespecialiseerde-groepstraining',
        permanent: false,
      },
      {
        source: '/overige-groepen',
        destination: '/gespecialiseerde-groepstraining',
        permanent: true,
      },

      {
        source: '/klachten',
        destination: '/fysiotherapie',
        permanent: true,
      },
      {
        source: '/klachten/:slug*',
        destination: '/fysiotherapie',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
