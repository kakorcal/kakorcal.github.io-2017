const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: /src/,
        test: /\.jsx?$/
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
