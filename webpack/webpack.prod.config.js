const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src')
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve('index.html')}),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve('webpack'),
      verbose: true
    })
  ]
};