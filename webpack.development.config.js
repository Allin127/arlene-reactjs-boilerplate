const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');

module.exports = {
  mode: 'development',
  //https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    host:"0.0.0.0",
    hot: true,
    contentBase: './dist',
    port:3333,
    after: function (app, server, compiler) {
    },
    before: function (app, server, compiler) {
        // console.log("before",path.resolve(process.cwd(), './assets'),app);
        app.use(express.static(path.resolve(process.cwd(), './assets')));
    }
  },
  entry: ['./src/index'],
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [new webpack.NamedModulesPlugin(), new HtmlWebpackPlugin({
        template:  './template.html',
        filename: 'index.html'
    }),new webpack.NamedModulesPlugin()],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  }
  
};


// ,'babel-plugin-syntax-dynamic-import', 'babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-class-properties', 'babel-plugin-transform-object-rest-spread', 'babel-plugin-lodash'