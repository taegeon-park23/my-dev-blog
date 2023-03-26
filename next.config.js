/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  babel: {
    presets: ['next/babel', '@babel/preset-react'],
  },
  swcMinify: false,
  webpack: (config, { isServer }) => {
    // Add the following lines to the existing webpack configuration
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [['@babel/plugin-transform-modules-commonjs', { loose: true }]],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
