const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve('src')],
    styles: [
      path.resolve('node_modules', 'bootstrap/dist/css', 'bootstrap.css'),      
      path.resolve('node_modules', 'font-awesome/css', 'font-awesome.css'),
      path.resolve('src/styles', 'base.scss')
    ],
    vendor: ['react', 'react-router', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    publicPath: '/build/',
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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[hash].[ext]"
      }, 
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[hash].[ext]"
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream&name=[name].[hash].[ext]"
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=[name].[hash].[ext]"
      }, 
      {
        test: /\.pdf$/,
        loader: "file?name=[name].[hash].[ext]"
      }, 
      {
        test: /\.(jpe?g|png|gif|svg(\?v=\d+\.\d+\.\d+)?)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions', '> 1%']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
      verbose: true
    }),
    new AppCachePlugin({
      exclude: ['.htaccess']
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
};