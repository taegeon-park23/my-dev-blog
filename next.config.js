/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  babel: {
    presets: ['next/babel', '@babel/preset-react'],
  },
};

module.exports = nextConfig;
