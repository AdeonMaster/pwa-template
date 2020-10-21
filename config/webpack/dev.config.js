const rules = require('./rules');
const {
  packageVersionPlugin,
  envPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  wrapperPlugin,
  cleanWebpackPlugin,
  offlinePlugin,
  jsonMinifyWebpackPlugin
} = require('./plugins');

const mode = 'development';

console.log('Development build..');

module.exports = () => ({
  mode,
  devtool: 'source-map',
  entry: './src/index.js',
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
    envPlugin(mode),
    packageVersionPlugin(),
    cleanWebpackPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    offlinePlugin(mode),
    wrapperPlugin,
    jsonMinifyWebpackPlugin
  ],
  module: {
    rules
  }
});
