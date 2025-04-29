/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add any remote image domains you might use
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
  experimental: {
    // Enable useful experimental features
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Enable basePath for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;