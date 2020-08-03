const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const mkDirChainSync = path => {
	const parts = path.split('/');

	for(let i = 0; i < parts.length; ++i) {
		const partialPath = parts.slice(0, i + 1).join('/');

		if (!fs.existsSync(partialPath)) {
			fs.mkdirSync(partialPath);
		}
	}
};

class StaticRouteGeneratorPlugin {
  constructor(options = {}) {
    this.routes = options.routes || [];
  }

  apply (compiler) {
    compiler.hooks.compilation.tap('StaticRouteGeneratorPlugin', (compilation) => {
      // Static Plugin interface |compilation |HOOK NAME | register listener 
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'StaticRouteGeneratorPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          const destinationDir = 'dist'; 

          this.routes.forEach(route => {
            let tmp = data.html;

            Object.keys(route.meta).forEach((metaKey) => {
              const regExp = new RegExp(`<meta name="${metaKey}" content=".+?">`);

              tmp = tmp.replace(regExp, `<meta name="${metaKey}" content="${route.meta[metaKey]}">`);
            })

            const path = `${destinationDir}${route.path}`;
            mkDirChainSync(path);
            fs.writeFileSync(`${path}/index.html`, tmp);
          });

          console.log(data);

          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = StaticRouteGeneratorPlugin
