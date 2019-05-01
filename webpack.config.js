const path = require('path')
const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const { npm_package_slideKey } = process.env

module.exports = {
  resolve: {
    extensions: ['.json'],
  },
  plugins: [
    new webpack.IgnorePlugin(/^fs$/),
    new MonacoWebpackPlugin({
      languages: ['typescript'],
    }),
    new PrerenderSPAPlugin({
      // `dist/${npm_package_slideKey}` に置いてある index.html を SPA として読み込み
      staticDir: path.join(__dirname, '../../dist', npm_package_slideKey),
      // SPA 内で `/${npm_package_slideKey}` にアクセスして
      routes: [`/${npm_package_slideKey}`],
      // 'dist' に snapshot を置く。
      // この時、routesで指定した `/${npm_package_slideKey}` に置くため、
      // `dist/${npm_package_slideKey}/index.html` が上書きされる
      outputDir: path.join(__dirname, '../../dist'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}
