/** @type {import('next').NextConfig} */
const nextConfig = {
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
