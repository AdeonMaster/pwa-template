export default class NamespacedLocalStorage {
  constructor(namespace = '') {
    this.namespace = namespace;
  }

  setItem = (key, value) =>
    window.localStorage.setItem(`_${this.namespace}.${key}`, JSON.stringify([value]));

  getItem = (key) => {
    const value = window.localStorage.getItem(`_${this.namespace}.${key}`);

    try {
      return typeof value === 'string' ? JSON.parse(value)[0] : null;
    } catch (error) {
      window.localStorage.removeItem(`_${this.namespace}.${key}`);

      return null;
    }
  };

  removeItem = (key) => window.localStorage.removeItem(`_${this.namespace}.${key}`);

  clear = () => {
    const target = `_${this.namespace}`;
    const existedKeys = Object.keys(window.localStorage);

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = existedKeys.length; i < len; ++i) {
      if (existedKeys[i].indexOf(target) !== -1) {
        window.localStorage.removeItem(existedKeys[i]);
      }
    }
  };
}
