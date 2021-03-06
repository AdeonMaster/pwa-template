const path = require('path');

const rules = require('./rules');
const {
  envPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
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
    cleanWebpackPlugin,
    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
    workboxPlugin(mode)
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
