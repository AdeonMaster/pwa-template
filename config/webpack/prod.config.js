const rules = require('./rules');
const {
  packageVersionPlugin,
  envPlugin,
  terserPlugin,
  cleanWebpackPlugin,
  optimizeCssAssetsPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  offlinePlugin,
  wrapperPlugin,
  staticRouteGeneratorPlugin
} = require('./plugins');

const mode = 'production';

console.log('Production build..');

module.exports = () => ({
  mode,
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
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
    envPlugin(mode),
    packageVersionPlugin(),
    cleanWebpackPlugin,
    optimizeCssAssetsPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    offlinePlugin,
    wrapperPlugin,
    staticRouteGeneratorPlugin
  ],
  module: {
    rules
  }
});
