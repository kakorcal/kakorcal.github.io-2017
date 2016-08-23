const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src')
  },
  output: {
    publicPath: '/',
    path: path.resolve('build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve('index.html')}),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve('webpack'),
      verbose: true
    })
  ]
};