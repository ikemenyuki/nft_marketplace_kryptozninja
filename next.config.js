/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    domains: ['ipfs.io'],
    path: '/',
  },
};

module.exports = nextConfig;
