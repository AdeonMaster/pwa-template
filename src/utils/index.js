export const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

export const buildEnum = (prefix, keys) => keys.reduce((obj, key) => {
  // eslint-disable-next-line no-param-reassign
  obj[key] = `${prefix}_${key}`;

  return obj;
}, {});
