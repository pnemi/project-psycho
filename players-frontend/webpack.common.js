require('dotenv').config()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@psycho': path.resolve(__dirname, './src'),
    },
    extensions: ['*', '.mjs', '.js', '.jsx'],
    plugins: [new DirectoryNamedWebpackPlugin(true)],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
}
