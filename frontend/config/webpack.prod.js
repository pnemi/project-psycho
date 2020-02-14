const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '.env.production'),
      systemvars: true,
    }),
    new CopyWebpackPlugin([
      { from: 'public', to: '../dist', ignore: ['index.html'] },
    ]),
  ],
})
