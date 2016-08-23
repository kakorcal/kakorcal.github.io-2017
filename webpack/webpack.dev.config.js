const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: /public\/javascripts/,
        test: /\.jsx?$/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  }
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true
  }
};
