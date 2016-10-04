var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'production/public/'),
    filename: 'bundle.js',
    publicPath: '/' // this will make sure that all statics are hit at '/' route
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader',
      },
      {
        test: /\.json$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'json-loader'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
