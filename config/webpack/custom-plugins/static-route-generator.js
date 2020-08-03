const HtmlWebpackPlugin = require('html-webpack-plugin');

class StaticRouteGeneratorPlugin {
  constructor(options = {}) {
    this.routes = options.routes || [];
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('StaticRouteGeneratorPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'StaticRouteGeneratorPlugin',
        (data, cb) => {
          this.routes.forEach(route => {
            let tmp = data.html;

            // replace existing meta tags
            Object.keys(route.meta).forEach((metaKey) => {
              const regExp = new RegExp(`<meta name="${metaKey}" content=".+?">`);

              tmp = tmp.replace(regExp, `<meta name="${metaKey}" content="${route.meta[metaKey]}">`);
            });

            // Insert this list into the webpack build as a new file asset
            compilation.assets[`${route.path}/index.html`] = {
              source: () => tmp,
              size: () => tmp.length,
            };
          });

          cb(null, data)
        }
      )
    })
  }
}

module.exports = StaticRouteGeneratorPlugin
