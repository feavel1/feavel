const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const nesting = require('tailwindcss/nesting');

const config = {
	plugins: [nesting(), tailwindcss(), autoprefixer]
};
module.exports = config;
