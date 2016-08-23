const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src')
  },
  output: {
    publicPath: '/build',
    path: path.resolve('build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve('webpack/template.html')}),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve('webpack'),
      verbose: true
    })
  ]
};