/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
