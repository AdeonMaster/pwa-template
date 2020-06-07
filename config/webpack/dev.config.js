const rules = require('./rules');
const {
  packageVersionPlugin, envPlugin, miniCssExtractPlugin, htmlWebpackPlugin, copyWebpackPlugin, wrapperPlugin
} = require('./plugins');

const mode = 'development';

console.log('Development build..');

module.exports = () => ({
  mode,
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
    envPlugin(mode),
    packageVersionPlugin(),
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    wrapperPlugin
  ],
  module: {
    rules
  }
});
