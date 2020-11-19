const path = require('path');

const rules = require('./rules');
const {
  packageVersionPlugin,
  envPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  // wrapperPlugin,
  cleanWebpackPlugin,
  workboxPlugin,
} = require('./plugins');

const mode = 'development';

process.traceDeprecation = true;

console.log('Development build..');

module.exports = () => ({
  mode,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'deterministic',
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
    workboxPlugin,
    // wrapperPlugin,
  ],
  module: {
    rules
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../../src/')
    }
  }
});
