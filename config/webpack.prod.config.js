const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const postCssLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      autoprefixer
    ]
  }
};
console.log('Production build..');

module.exports = env => ({
  mode: 'production',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../static/js'),
    filename: '[name].js'
  },
  devtool: 'false',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: true
      })
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '../css/[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
		NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCssLoaderConfig
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCssLoaderConfig,
          'sass-loader'
        ]
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
});