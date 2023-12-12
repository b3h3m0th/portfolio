/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "stackoverflow.com" }],
  },
};

module.exports = nextConfig;
