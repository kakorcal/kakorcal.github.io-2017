const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src'),
    styles: [
      path.resolve('node_modules', 'bootstrap/dist/css', 'bootstrap.css'),      
      path.resolve('node_modules', 'font-awesome/css', 'font-awesome.css'),
      path.resolve('src/styles', 'base.scss')
    ]
  },
  output: {
    publicPath: '/build',
    path: path.resolve('build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
        include: /(src|node_modules)/
      }, 
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, 
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('webpack/template.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve('webpack'),
      verbose: true
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
};