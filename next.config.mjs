/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static exports
  // distDir is only used for the .next directory - removing to avoid conflicts
  // with the 'output: export' setting which puts files in ./out
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add any remote image domains you might use
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
    unoptimized: true, // Required for static export
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