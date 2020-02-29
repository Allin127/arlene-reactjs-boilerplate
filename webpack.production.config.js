const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index',
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      exclude: '/node_modules/',
      options: {
        presets: ['babel-preset-es2015', 'babel-preset-react'],
        plugins: ['babel-plugin-syntax-dynamic-import', 'babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-class-properties', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-lodash']
      }
    }]
  },
  plugins: [new UglifyJSPlugin(), new HtmlWebpackPlugin({
        template:  './template.html',
        filename: 'index.html'
    })],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};