const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  optimizeCssAssetsPlugin: new OptimizeCSSAssetsPlugin({}),
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename: '../css/[name].css',
    chunkFilename: '../css/[id].css'
  }),
  devEnvPlugin: new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  prodEnvPlugin: new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  terserPlugin: new TerserPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
    extractComments: true
  })
};
