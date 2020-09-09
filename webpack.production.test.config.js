const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'production',
  // entry: ['./src/simple/index','./src/router-sample/index','./src/website-layout/index'],
  entry: ['./src/miniprogramm/test'],
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
          "plugins":
            ["react-hot-loader/babel",
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]]
        }
      }],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
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
            name: 'assets/[name].[hash].[ext]',
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
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }), new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.__IS_WEB__': true
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
      
    },
    extensions: ['.web.js', '.js', '.jsx']
  },
  externals:{
    'arl':'arl'
  }
};