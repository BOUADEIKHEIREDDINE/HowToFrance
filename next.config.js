/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // Enable static export so we can deploy via GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project site: https://BOUADEIKHEIREDDINE.github.io/HowToFrance
  basePath: isProd ? '/HowToFrance' : '',
  assetPrefix: isProd ? '/HowToFrance/' : '',
};

module.exports = nextConfig;
