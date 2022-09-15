/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.google.com"],
    disableStaticImages: true,
  },
}

module.exports = nextConfig
