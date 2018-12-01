const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    host: '0.0.0.0',
    port: 3333,
    disableHostCheck: true,
    publicPath: '/',
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
  resolve: {
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.join(__dirname, '.env.development'),
      systemvars: true,
    }),
  ],
})
