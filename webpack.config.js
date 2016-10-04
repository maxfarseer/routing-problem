var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new WebpackNotifierPlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include:
          path.join(__dirname, 'src')

      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff)(\?[a-z0-9]+)?$/,
        include: path.join(__dirname, 'src'),
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
