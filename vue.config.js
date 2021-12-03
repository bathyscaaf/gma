const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  chainWebpack (config) {
    config.plugin('CompressionPlugin').use(CompressionPlugin)
  },
  devServer: {
    compress: true
  }
}
