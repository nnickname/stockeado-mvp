/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: false,
  distDir: './dist/',
  experimental: {serverActions: true},
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 
  images: {
    domains: ["localhost"],
    remotePatterns: [
      
    ],
  },
};

module.exports = nextConfig;
