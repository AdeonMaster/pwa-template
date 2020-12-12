const fs = require('fs');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');

const envPlugin = (mode = 'development') => new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(mode)
  }
});

const packageVersionPlugin = () => {
  const packageJson = fs.readFileSync('./package.json')
  const version = JSON.parse(packageJson).version || 0;

  return new webpack.DefinePlugin({
    'process.env': {
      PACKAGE_VERSION: `"${version}"`
    }
  });
}

module.exports = {
  packageVersionPlugin,
  envPlugin,
  cssMinimizerPlugin: new CssMinimizerPlugin(),
  miniCssExtractPlugin: new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  terserPlugin: new TerserPlugin({
    parallel: true,
    extractComments: true
  }),
  cleanWebpackPlugin: new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
  }),
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    template: 'src/template.html',
    scriptLoading: 'defer',
    // hash: true,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    }
  }),
  copyWebpackPlugin: new CopyWebpackPlugin({
    patterns: [
      { from: 'static' },
    ],
  }),
  workboxPlugin: new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'sw.js',
    maximumFileSizeToCacheInBytes: 5 * 1000000 // 5mb
  }),
  jsonMinimizerPlugin: new JsonMinimizerPlugin()
};
