const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
console.log('Development build..');

module.exports = env => ({
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '../css/[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
		NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        include: path.resolve(__dirname, '../../src'),
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
