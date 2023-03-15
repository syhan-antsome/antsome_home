/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://antsome.com:3010/home/:path*",
      },
    ];
  },
}
module.exports = nextConfig
