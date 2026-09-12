import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
        source: '/behandelingen',
        destination: '/fysiotherapie',
        permanent: true,
      },
      {
        source: '/behandelingen/:slug*',
        destination: '/fysiotherapie',
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
