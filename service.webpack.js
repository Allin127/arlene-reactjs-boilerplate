//打包Service.js
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { readFileSync,outputFileSync } = require('fs-extra');

var extensions;
if (process.env.__PLATFORM__=='NA') {
  extensions = ['.na.js','.web.js', '.js', '.jsx'];
}else{
  extensions = ['.web.js', '.js', '.jsx'];
}

module.exports = {
  mode: 'production',
  entry: ['./src/miniprogramm/fmk/mp-service-js-framework'],
  module: {
    rules: [{
      test: /\.js?$/,
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
            [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              
            ]
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
          let code = readFileSync(path.resolve(__dirname, 'node_modules/@arl/MPService/index_tmp.js'),{ encoding: "utf8" })
          let resultCode= readFileSync(path.resolve(__dirname, 'src/miniprogramm/fmk/MPCore/tpl/service.tpl.js'),{ encoding: "utf8" }).replace("$CORE_CODE",code);
          let filePath = path.resolve(__dirname, 'node_modules/@arl/MPService/index.js');
          outputFileSync(filePath,resultCode);
        },1000);
        
        
      }
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'index_tmp.js',
    libraryTarget: 'global',
    umdNamedDefine: true,
    globalObject:'_$g',
    path: path.resolve(__dirname, 'node_modules/@arl/MPService')
  },
  resolve: {
    extensions: extensions
  },
  optimization: {
    minimize: true
  }
};