const path = require('path');

const rules = require('./rules');
const {
  envPlugin,
  terserPlugin,
  jsonMinimizerPlugin,
  cleanWebpackPlugin,
  cssMinimizerPlugin,
  miniCssExtractPlugin,
  htmlWebpackPlugin,
  copyWebpackPlugin,
  workboxPlugin,
} = require('./plugins');

const mode = 'production';

process.traceDeprecation = true;

console.log('Production build..');

module.exports = () => ({
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  devtool: 'hidden-source-map',
  optimization: {
    minimizer: [
      terserPlugin,
      cssMinimizerPlugin,
      jsonMinimizerPlugin
    ],
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
