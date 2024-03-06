/** @type {import('next').NextConfig} */
const nextConfig = {
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
