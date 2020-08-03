const rules = require('./rules');
const {
  packageVersionPlugin, envPlugin, miniCssExtractPlugin, htmlWebpackPlugin, copyWebpackPlugin, wrapperPlugin, cleanWebpackPlugin
} = require('./plugins');
const StaticRouteGeneratorPlugin = require('./custom-plugins/static-route-generator');

const mode = 'development';

console.log('Development build..');

module.exports = () => ({
  mode,
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'hashed',
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
    wrapperPlugin,
    new StaticRouteGeneratorPlugin({
      routes: [
        {
          path: '/socket-example',
          meta: {
            description: 'This is a socket example page'
          }
        }, {
          path: '/modal-example',
          meta: {
            description: 'This is a modal example page'
          }
        }
      ]
    })
  ],
  module: {
    rules
  }
});
