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
        source: "/home/:path*",
        destination: "http://localhost:3010/home/:path*",
      },
    ];
  },
}
module.exports = nextConfig
