const path = require('path');

const rules = require('./rules');
const { miniCssExtractPlugin, devEnvPlugin } = require('./plugins');

console.log('Development build..');

module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../static/js'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    miniCssExtractPlugin,
    devEnvPlugin
  ],
  module: {
    rules
  }
});
