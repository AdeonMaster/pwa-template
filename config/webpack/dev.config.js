const path = require('path');

const rules = require('./rules');
const {
  cleanWebpackPlugin, miniCssExtractPlugin, devEnvPlugin, htmlWebpackPlugin, copyWebpackPlugin
} = require('./plugins');

console.log('Development build..');

module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    cleanWebpackPlugin,
    devEnvPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin
  ],
  module: {
    rules
  }
});
