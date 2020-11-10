//打包service.js
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { readFileSync,outputFileSync } = require('fs-extra');

module.exports = {
  mode: 'production',
  entry: ['./src/miniprogramm/fmk/mp-page-js-framework'],
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
    // new BundleAnalyzerPlugin(),
    new webpack.ProgressPlugin((percentage, message, ...args) => {
      // e.g. Output each progress message directly to the console:
      // console.info(percentage, message, ...args);
      if(percentage==1){
        setTimeout(function(){
          let code = readFileSync(path.resolve(__dirname, 'node_modules/@arl/MPPage/index_tmp.js'),{ encoding: "utf8" })
          let resultCode= readFileSync(path.resolve(__dirname, 'src/miniprogramm/fmk/MPCore/tpl/page.tpl.js'),{ encoding: "utf8" }).replace("$CORE_CODE",code);
          let filePath = path.resolve(__dirname, 'node_modules/@arl/MPPage/index.js');
          outputFileSync(filePath,resultCode);
        },1000);
        
        
      }
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'index_tmp.js',
    library: 'MPPage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'node_modules/@arl/MPPage')
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx']
  }
};