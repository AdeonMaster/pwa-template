import { map } from 'ramda';

export default class LocalizationDictionary {
  constructor(content) {
    this.content = content || {};
  }

  get = (path, useCheck = true) => {
    if (useCheck) {
      if (this.content[path]) {
        return this.content[path];
      }

      if (this.content[path] === undefined) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error(`Localization: Unknown dictionary path (${path})`);
        }
        return path;
      }

      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(`Localization: Dictionary path (${path}) exists but is empty`);
      }
      return path;
    }

    return this.content[path];
  };
}

export const buildDictionaries = map(
  (dictionaryContent) => new LocalizationDictionary(dictionaryContent),
);
