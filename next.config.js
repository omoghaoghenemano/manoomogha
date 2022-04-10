/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/manoomogha',
  },
  basePath:'/manoomogha',
  assetPrefix:'/manoomogha'
}

module.exports = nextConfig
