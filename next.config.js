/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: false,
  transpilePackages: ['react-hotjar'],
}

module.exports = nextConfig
