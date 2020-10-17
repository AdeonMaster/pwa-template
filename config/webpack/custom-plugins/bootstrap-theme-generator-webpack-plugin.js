const fs = require('fs');
const path = require('path');
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TO DO: fix sourcemaps!!!!!!!!!!! & non-html-webpack-plugin version

const omitKeys = (keys, obj) => keys.reduce((a, e) => {
  const { [e]: omit, ...rest } = a;

  return rest;
}, obj);

class BootstrapThemeGeneratorWebpackPlugin {
  constructor(options = {}) {
    this.themesDir = options.themesDir;
    this.defaultTheme = options.defaultTheme;
  }

  apply(compiler) {
    const themeFileNames = fs.readdirSync(path.resolve(this.themesDir));
    const themes = themeFileNames.map((themeFileName) => {
      const filePath = path.resolve(`${this.themesDir}/${themeFileName}`);
      const fileName = themeFileName.split('.')[0];

      return {
        filePath,
        fileName,
      };
    });

    themes.forEach(({ filePath, fileName }) => {
      const entryPlugin = new SingleEntryPlugin(
        this.context,
        filePath,
        fileName
      );

      entryPlugin.apply(compiler);
    });

    compiler.hooks.emit.tapAsync(
      'BootstrapThemeGeneratorWebpackPlugin',
      (compilation, callback) => {
        themes.forEach(({ fileName }, index) => {
          const keys = Object.keys(compilation.assets);
          const entriesKeysToBeRemoved = keys.filter(key => new RegExp(`^${fileName}(..+)?.js(.map)?$`).test(key));
          const mainThemeEntryKey = keys.find(key => new RegExp(`^${fileName}(..+)?.css$`).test(key));

          const mainThemeEntry = compilation.assets[mainThemeEntryKey];

          themes[index].entryKey = mainThemeEntryKey;

          compilation.assets = {
            ...omitKeys(entriesKeysToBeRemoved, compilation.assets),
            [mainThemeEntryKey]: mainThemeEntry,
          };
        });

        callback();
      }
    );

    compiler.hooks.entryOption.tap(
      'BootstrapThemeGeneratorWebpackPlugin',
      () => {
        if (compiler.options.plugins && compiler.options.plugins.length) {
          const themeChunks = themes.map(({ fileName }) => fileName);

          compiler.options.plugins.forEach((plugin) => {
            if (plugin instanceof HtmlWebpackPlugin) {
              plugin.options.excludeChunks = plugin.options.excludeChunks
                ? [...themeChunks, ...plugin.options.excludeChunks]
                : themeChunks;
            }
          });
        }
      }
    );

    compiler.hooks.compilation.tap('BootstrapThemeGeneratorWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
        'BootstrapThemeGeneratorWebpackPlugin',
        (pluginArgs, callback) => {
          const defaultTheme = themes.find(({ fileName }) => fileName === this.defaultTheme);
          
          const script = `
            window.appTheme = {
              availableThemes: ${JSON.stringify(themes.map(({ fileName, entryKey }) => ({ name: fileName, entryKey })))},
              currentTheme: '${defaultTheme.name}',
              switch: function(name) {
                if (window.appTheme.currentTheme === name) {
                  return;
                }

                var node = document.querySelector('link#theme');
                var theme = window.appTheme.availableThemes.find(function(theme) {
                  return theme.name === name;
                });
  
                if (node && theme) {
                  document.body.classList.toggle(window.appTheme.currentTheme, false);
                  document.body.classList.toggle(theme.name, true);

                  window.appTheme.currentTheme = theme.name;

                  node.href = location.origin+'/'+theme.entryKey;
                }
              }
            }

            window.onload = function() {
              document.body.classList.toggle(window.appTheme.currentTheme, true);
            }
          `;

          pluginArgs.assetTags.styles.push({
            tagName: 'link',
            voidTag: false,
            attributes: {
              href: `/${defaultTheme.entryKey}`,
              rel: 'stylesheet',
              id: 'theme'
            }
          });

          pluginArgs.assetTags.scripts.push({
            tagName: 'script',
            voidTag: false,
            attributes: {},
            innerHTML: script
          });

          callback(null, pluginArgs)
        }
      );
    });
  }
}

module.exports = BootstrapThemeGeneratorWebpackPlugin;
