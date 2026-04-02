/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: ['10.92.3.59']
};

module.exports = nextConfig;
