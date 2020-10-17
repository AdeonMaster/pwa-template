class JSONMinifyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('JSONMinifyWebpackPlugin', (compilation) => {
      const assetsKeys = Object.keys(compilation.assets); 

      for (let i = 0; i < assetsKeys.length; ++i) {
        const assetKey  = assetsKeys[i];

        if (/\.json$/.test(assetKey)) {
          const asset = compilation.assets[assetKey];

          const jsonData = asset.source().toString();
          const jsonMinifiedData = JSON.stringify(JSON.parse(jsonData));

          compilation.assets[assetKey] = {
            source: () => jsonMinifiedData,
            size: () => jsonMinifiedData.length,
          };
        }
      }
    })
  }
}

module.exports = JSONMinifyWebpackPlugin;
