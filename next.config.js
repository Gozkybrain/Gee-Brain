/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
    unoptimized: true, // Disable image optimization
  },
  output: 'export', // 👈 THIS is the replacement for `next export`
};

module.exports = nextConfig;
