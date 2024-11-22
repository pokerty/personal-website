import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/**',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        port: '',
        pathname: '/b/**', 
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/comp/**',
      },
      {
        protocol: 'https',
        hostname: 'dkc9trqgco1sw.cloudfront.net',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**', 
      },
      
    ],
  },
};

export default nextConfig;