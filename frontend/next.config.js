/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const ORIGIN = process.env.ORIGIN

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${ORIGIN}/api/:path*`,
      },
    ];
  },
};

