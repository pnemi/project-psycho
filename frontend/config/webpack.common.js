require('dotenv').config()

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TSConfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
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
