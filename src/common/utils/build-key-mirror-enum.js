/* eslint no-param-reassign:0 */

const buildKeyMirrorEnum = (prefix, keys) =>
  keys.reduce((obj, key) => {
    if (Array.isArray(key)) {
      obj[key[0]] = `${prefix}.${key[0]}`;

      key[1].forEach((suffix) => {
        obj[`${key[0]}_${suffix}`] = `${prefix}.${key[0]}_${suffix}`;
      });

      return obj;
    }

    obj[key] = `${prefix}.${key}`;

    return obj;
  }, {});

export default buildKeyMirrorEnum;
