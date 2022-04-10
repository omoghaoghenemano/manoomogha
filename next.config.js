/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:'/manoomogha',
  assetPrefix:'/manoomogha'
}

module.exports = nextConfig
