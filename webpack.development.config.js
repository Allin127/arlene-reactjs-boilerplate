const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');

module.exports = {
  mode: 'development',
  //https://webpack.js.org/configuration/dev-server/#devserver
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: "0.0.0.0",
    hot: true,
    contentBase: './dist',
    port: 3333,
    after: function (app, server, compiler) {
    },
    before: function (app, server, compiler) {
      // console.log("before",path.resolve(process.cwd(), './assets'),app);
      app.use(express.static(path.resolve(process.cwd(), './assets')));
    }
  },
  // entry: ['./src/simple/index','./src/router-sample/index','./src/website-layout/index'],
  entry: ['./src/website-layout/index'],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "loose": true,
                "modules": false,
                "targets": {
                  "browsers": "last 2 chrome versions"
                }
              }
            ],
            "@babel/preset-react"
          ],
          "plugins": ["react-hot-loader/babel", ['@babel/plugin-proposal-decorators', { legacy: true }], ["@babel/plugin-proposal-class-properties", { loose: true }]]
        }
      }],
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
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: '[name].[hash].[ext]',
            esModule: false
          },
        },
      ],
    },
    {
      test: /\.ttf$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: '[name].[hash].[ext]',
            esModule: false
          },
        },
      ],
    },
    ]
  },
  plugins: [new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    '__IS_WEB__': true
  }),
  new HtmlWebpackPlugin({
    template: './template.html',
    filename: 'index.html'
  }), new webpack.NamedModulesPlugin()],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname, 'src'),
      'react-dom': '@hot-loader/react-dom',
      // 'ALBase': path.resolve(__dirname, 'node_modules/h5-lib-base/src/index'),
      // 'ALUI-WEB': path.resolve(__dirname, 'node_modules/h5-lib-ui/src/web/index'),
      // 'ALUI-LFE': path.resolve(__dirname, 'node_modules/h5-lib-ui/src/lfe'),
      // 'react-native': 'react-native-web',
      // '@react-navigation': path.resolve(__dirname, 'node_modules/h5-lib-ui/src/lfe/router')
    },
    extensions: ['.web.js', '.js', '.jsx']
  }

};