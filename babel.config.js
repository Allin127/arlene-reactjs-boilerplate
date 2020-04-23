
console.log(process.env);
//启动时候塞入参数
if (process.env.__IS_WEB__!=='1') {
  module.exports =
  {
    "presets": ['module:metro-react-native-babel-preset'],
    "plugins": [
      ["module-resolver", {
        "alias": {
          'ALBase': './h5-lib-base/src/index',
          'ALUI-WEB': './h5-lib-ui/src/web/index',
          'ALUI-LFE': './h5-lib-ui/src/lfe',
          'PFE':'./arlene-pfe/src/components'
        }
      }],
      // ["import", { "libraryName": "antd-mobile-rn" }]
    ]
  };
} else {
  module.exports =
  {
    "presets": ['module:metro-react-native-babel-preset'],
    "plugins": [
      
      ["import", { "libraryName": "antd-mobile-rn" }]
    ]
  };
}