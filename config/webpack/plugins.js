const fs = require('fs');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WrapperPlugin = require('wrapper-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');

// const StaticRouteGeneratorWebpackPlugin = require('./custom-plugins/static-route-generator-webpack-plugin');
// const BootstrapThemeGeneratorWebpackPlugin = require('./custom-plugins/bootstrap-theme-generator-webpack-plugin');

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
    swDest: 'sw.js'
  }),
  jsonMinimizerPlugin: new JsonMinimizerPlugin(),
  wrapperPlugin: new WrapperPlugin({
    test: /\.js$/, // only wrap output of bundle files with '.js' extension 
    header: 'try {\n',
    footer: '\n} catch(e) {\ndocument.getElementById("root").innerHTML=\'<div class="bg-danger vw-100 vh-100 d-flex justify-content-center align-items-center"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="dizzy" class="svg-inline--fa fa-dizzy fa-w-16 text-white font-size-256 w-100" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-33.8-217.9c7.8-7.8 7.8-20.5 0-28.3L196.3 192l17.9-17.9c7.8-7.8 7.8-20.5 0-28.3-7.8-7.8-20.5-7.8-28.3 0L168 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.9 7.7 20.5 7.7 28.4-.2zm160-92.2c-7.8-7.8-20.5-7.8-28.3 0L328 163.7l-17.8-17.8c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l17.9 17.9-17.9 17.9c-7.8 7.8-7.8 20.5 0 28.3 7.8 7.8 20.5 7.8 28.3 0l17.8-17.8 17.8 17.8c7.8 7.8 20.5 7.8 28.3 0 7.8-7.8 7.8-20.5 0-28.3l-17.8-18 17.9-17.9c7.7-7.8 7.7-20.4 0-28.2zM248 272c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"></path></svg></div>\';\nconsole.error(e);\n}'
  }),
  // staticRouteGeneratorWebpackPlugin: new StaticRouteGeneratorWebpackPlugin({
  //   routes: [
  //     {
  //       path: '/socket-example',
  //       meta: {
  //         description: 'This is a socket example page'
  //       }
  //     }, {
  //       path: '/modal-example',
  //       meta: {
  //         description: 'This is a modal example page'
  //       }
  //     }
  //   ]
  // }),
  // bootstrapThemeGeneratorWebpackPlugin: new BootstrapThemeGeneratorWebpackPlugin({
  //   themesDir: 'src/common/scss/themes',
  //   defaultTheme: 'light-theme'
  // })
};
