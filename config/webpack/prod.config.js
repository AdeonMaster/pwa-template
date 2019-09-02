const path = require('path');

const rules = require('./rules');
const { terserPlugin, optimizeCssAssetsPlugin, miniCssExtractPlugin, prodEnvPlugin } = require('./plugins');

console.log('Production build..');

module.exports = () => ({
  mode: 'production',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../static/js'),
    filename: '[name].js'
  },
  devtool: 'false',
  optimization: {
    minimizer: [
      terserPlugin
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    optimizeCssAssetsPlugin,
    miniCssExtractPlugin,
    prodEnvPlugin
  ],
  module: {
    rules
  }
});
