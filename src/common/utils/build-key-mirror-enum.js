/* eslint no-param-reassign:0 */

/**
 * Used to build redux action types key mirror enum
 *
 * @param {string} prefix Action group prefix
 * @param {array} keys Array of actions
 * @returns {Object}
 *
 * @example
 * const APP = buildKeyMirrorEnum('APP', ['INIT', 'INIT_SUCCESS', 'INIT_FAILURE']);
 *
 * // the same as
 * const APP = {
 *    INIT: 'APP_INIT',
 *    INIT_SUCCESS: 'APP_INIT_SUCCESS',
 *    INIT_FAILURE: 'APP_INIT_FAILURE',
 * };
 */
const buildKeyMirrorEnum = (prefix, keys) =>
  keys.reduce((obj, key) => {
    if (Array.isArray(key)) {
      obj[key[0]] = `${prefix}.${key[0]}`;

      // TO DO: replace forEach in order to speed up ?
      key[1].forEach((suffix) => {
        obj[`${key[0]}_${suffix}`] = `${prefix}.${key[0]}_${suffix}`;
      });

      return obj;
    }

    obj[key] = `${prefix}.${key}`;

    return obj;
  }, {});

export default buildKeyMirrorEnum;
