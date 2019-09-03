const path = require('path');

const rules = require('./rules');
const {
  terserPlugin,
  prodEnvPlugin,
  cleanWebpackPlugin,
  optimizeCssAssetsPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  serviceWorkerGeneratorWebpackPlugin
} = require('./plugins');

console.log('Production build..');

module.exports = () => ({
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js'
  },
  devtool: 'false',
  optimization: {
    minimizer: [
      terserPlugin
    ],
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
    prodEnvPlugin,
    cleanWebpackPlugin,
    optimizeCssAssetsPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    serviceWorkerGeneratorWebpackPlugin
  ],
  module: {
    rules
  }
});
