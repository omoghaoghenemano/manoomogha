/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/next-js-pages"
}

module.exports = nextConfig
