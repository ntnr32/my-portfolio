const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: !debug ? './my-portfolio/' : '',
  assetPrefix: !debug ? './my-portfolio/' : '/'
}

module.exports = nextConfig
