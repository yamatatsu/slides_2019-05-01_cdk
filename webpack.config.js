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
			// `dist` に置いてある index.html を SPA として読み込み
			staticDir: path.join(__dirname, '../../dist'),
			// SPA 内で `/${npm_package_slideKey}` にアクセスして
			routes: [`/`]
			// 'dist' に snapshot を置く。
			// この時、routesで指定した `/${npm_package_slideKey}` に置くため、
			// `dist/${npm_package_slideKey}/index.html` が上書きされる
			// outputDir: path.join(__dirname, '../../dist'),
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
