/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist/',
  
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
