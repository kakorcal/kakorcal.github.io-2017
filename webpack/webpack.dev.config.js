const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        query: {
          presets: ['react-hmre']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: /(src|node_modules)/
      }, 
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
      }, 
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[ext]"
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream&name=[name].[ext]"
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=[name].[ext]"
      }, 
      {
        test: /\.(jpe?g|png|gif|svg(\?v=\d+\.\d+\.\d+)?)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunkModules: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve('webpack/template.html')}),    
    new webpack.HotModuleReplacementPlugin({
      muitiStep: true
    })
  ]
};