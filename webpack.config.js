const prod = process.env.NODE_ENV === 'production';
const path = require('path');
const filename = `${prod ? 'bundle' : 'dev'}.js`;

module.exports = {
	entry: './src/index.js',
	mode: prod ? 'production' : 'development',
	output: {
		path: path.resolve('./dist'),
		filename,
	}
};
prod && (module.exports.module = {
	rules: [{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	}]
});
