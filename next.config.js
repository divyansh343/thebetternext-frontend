const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','www.hyperui.dev','placeimg.com','cdn.sanity.io','source.unsplash.com', 'tuk-cdn.s3.amazonaws.com','i.ibb.co','img.freepik.com'],
  },
	pwa: {
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
	},
});