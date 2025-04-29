/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
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
  // This basePath is set automatically by GitHub Actions if using github-pages
  // If testing locally, you might want to comment this out
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;