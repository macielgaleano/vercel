/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "images.wsj.net", "a57.foxnews.com"],
  },
};

module.exports = nextConfig;
