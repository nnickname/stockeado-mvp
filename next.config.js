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
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_TOKEN,
  }
};

module.exports = nextConfig;
