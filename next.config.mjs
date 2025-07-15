/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co', 'i.ibb.co.com', 'lh3.googleusercontent.com']
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
      },
};

export default nextConfig;
