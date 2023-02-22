/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BACKEND_API_URI: process.env._NEXT_BACKEND_API_URI,
  },
};

module.exports = nextConfig;
