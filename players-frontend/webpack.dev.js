const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3333,
    publicPath: 'http://localhost:3333/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.join(__dirname, '.env.development'),
      systemvars: true,
    })
  ]
});
