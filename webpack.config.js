const path = require('path');
const webpack = require('webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { npm_package_slideKey } = process.env;

module.exports = {
	resolve: {
		extensions: ['.json']
	},
	plugins: [
		new webpack.IgnorePlugin(/^fs$/),
		new CopyPlugin([{ from: 'public' }]),
		new PrerenderSPAPlugin({
			staticDir: path.join(__dirname, './dist'),
			routes: ['/']
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
};
