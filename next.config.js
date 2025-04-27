/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This ensures our static HTML files are properly served
  trailingSlash: true
};

module.exports = nextConfig;
