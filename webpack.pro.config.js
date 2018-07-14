const webpack = require('webpack');
const makeWebpack = require('basewebpack');

module.exports = makeWebpack({
  resolve: {
    extensions: ['.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
});
