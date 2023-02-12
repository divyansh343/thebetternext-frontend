/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','www.hyperui.dev','placeimg.com','cdn.sanity.io','source.unsplash.com', 'tuk-cdn.s3.amazonaws.com','i.ibb.co','img.freepik.com'],
  },
})