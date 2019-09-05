const rules = require('./rules');
const {
  cleanWebpackPlugin, miniCssExtractPlugin, devEnvPlugin, htmlWebpackPlugin, copyWebpackPlugin, serviceWorkerGeneratorWebpackPlugin
} = require('./plugins');

console.log('Development build..');

module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
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
    copyWebpackPlugin,
    serviceWorkerGeneratorWebpackPlugin
  ],
  module: {
    rules
  }
});
