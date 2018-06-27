const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');

module.exports = {
	plugins: [
		stylelint(),
		normalize(),
		autoprefixer()
	]
};
