/** @type {import('next').NextConfig} */
const nextConfig = {
  //distDir: './dist/',
  
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
  },
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'host', value: 'stockeado.com' }],
        destination: 'https://www.stockeado.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

