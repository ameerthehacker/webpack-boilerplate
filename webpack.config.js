const path = require('path');
const webpack = require('webpack');
const publicPath = path.resolve(__dirname, 'src', 'app', 'public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.argv.indexOf('-p') == -1;
const extractSass = new ExtractTextPlugin({
	filename: 'app.bundle.css'
});

const webpackConfig = {
	entry: path.join(__dirname, 'src', 'js', 'app.js'),
	output: {
		path: publicPath,
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: extractSass.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourcemap: devMode
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								sourcemap: devMode
							}
						}
					]
				})
			},
			{
				test: /(\.jpg)|(\.jpeg)|(\.png)|(\.gif)/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]-[hash].[ext]'
					}
				}
			}
		]
	},
	stats: {
		colors: true
	},
	plugins: [extractSass],
	devtool: devMode ? 'source-map' : ''
};

module.exports = webpackConfig;
