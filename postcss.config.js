// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss');

module.exports = {
  // eslint-disable-next-line global-require
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
