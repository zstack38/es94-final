import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize image handling
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize for production
  // Removed experimental optimizeCss to fix build issues
  // Configure output for static exports if needed
  output: 'standalone',
  // Configure redirects if needed
  async redirects() {
    return [];
  },
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
