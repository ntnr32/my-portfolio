const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? 'https://ntnr32.github.io/my-portfolio/' : '/'
}

module.exports = nextConfig
