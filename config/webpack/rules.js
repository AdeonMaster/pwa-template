const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssRegExpr = /\.css$/;
const sassRegExpr = /\.sass$/;
const scssRegExpr = /\.scss$/;
const cssModuleRegExpr = /\.module.css$/;
const sassModuleRegExpr = /\.module.sass$/;
const scssModuleRegExpr = /\.module.scss$/;

const miniCssExtractLoader = MiniCssExtractPlugin.loader;

const cssLoaderConfig = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[hash:base64:5]',
    }
  }
};

const postCssLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      autoprefixer
    ]
  }
};

const jsRules = {
  test: /\.js?/,
  include: path.resolve(__dirname, '../../src'),
  use: [
    'babel-loader', 'eslint-loader'
  ]
};

const cssRules = {
  test: cssRegExpr,
  exclude: cssModuleRegExpr,
  use: [
    miniCssExtractLoader,
    'css-loader',
    postCssLoaderConfig
  ]
};

const cssModuleRules = {
  test: cssModuleRegExpr,
  use: [
    miniCssExtractLoader,
    cssLoaderConfig,
    postCssLoaderConfig
  ]
};

const sassRules = {
  test: sassRegExpr,
  exclude: sassModuleRegExpr,
  use: [
    miniCssExtractLoader,
    'css-loader',
    postCssLoaderConfig,
    'sass-loader'
  ]
};

const sassModuleRules = {
  test: sassModuleRegExpr,
  use: [
    miniCssExtractLoader,
    cssLoaderConfig,
    postCssLoaderConfig,
    'sass-loader'
  ]
};

const scssRules = {
  test: scssRegExpr,
  exclude: scssModuleRegExpr,
  use: [
    miniCssExtractLoader,
    'css-loader',
    postCssLoaderConfig,
    'sass-loader'
  ]
};

const scssModuleRules = {
  test: scssModuleRegExpr,
  use: [
    miniCssExtractLoader,
    cssLoaderConfig,
    postCssLoaderConfig,
    'sass-loader'
  ]
};

const otherRules = {
  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=100000'
};

module.exports = [
  jsRules,
  cssRules,
  sassRules,
  scssRules,
  cssModuleRules,
  sassModuleRules,
  scssModuleRules,
  otherRules
];
