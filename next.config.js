/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://sandbox-uploads.imgix.net/u/1649612586-03e5fcc890055396a2f577dd5a36c457',
  },
  basePath:'/manoomogha',
  assetPrefix:'/manoomogha'
}

module.exports = nextConfig
