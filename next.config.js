/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','www.hyperui.dev','placeimg.com','cdn.sanity.io','source.unsplash.com', 'tuk-cdn.s3.amazonaws.com','i.ibb.co','img.freepik.com'],
  },
}
const withPWA = require("next-pwa");
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
        disable: process.env.NODE_ENV ===      'development',
		skipWaiting: true,
	},
});