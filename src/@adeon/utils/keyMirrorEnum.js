// TODO: check if there is a performance drop while using long keys

import { mapObjIndexed } from 'ramda';

export const buildKeyMirrorEnum = (prefix, keys) => keys.reduce((obj, key) => {
  // eslint-disable-next-line no-param-reassign
  obj[key] = `${prefix}_${key}`;

  return obj;
}, {});

export const buildCombinedKeyMirrorEnum = (prefix, structure) => mapObjIndexed((value, key) => (typeof (value) === 'string'
  ? `${prefix}_${key}`
  : Array.isArray(value)
    ? buildKeyMirrorEnum(`${prefix}_${key}`, value)
    : buildCombinedKeyMirrorEnum(`${prefix}_${key}`, value)
), structure);
