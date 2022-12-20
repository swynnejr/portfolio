/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yt3.googleusercontent.com', 'media-exp1.licdn.com', 'avatars.githubusercontent.com', 'brandeps.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
