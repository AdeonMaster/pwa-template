import { propOr, pathOr } from 'ramda';

import { APP_ID, BOOLEAN, EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from '~/common/constants';
import NamespacedLocalStorage from '~/common/utils/namespaced-local-storage';

export const propOrEmptyString = propOr(EMPTY_STRING);
export const propOrEmptyObject = propOr(EMPTY_OBJECT);
export const propOrEmptyArray = propOr(EMPTY_ARRAY);
export const propOrFalse = propOr(BOOLEAN.FALSE);
export const propOrTrue = propOr(BOOLEAN.TRUE);

export const pathOrEmptyString = pathOr(EMPTY_STRING);
export const pathOrEmptyObject = pathOr(EMPTY_OBJECT);
export const pathOrEmptyArray = pathOr(EMPTY_ARRAY);
export const pathOrFalse = pathOr(BOOLEAN.FALSE);
export const pathOrTrue = pathOr(BOOLEAN.TRUE);

export const namespacedLocalStorage = new NamespacedLocalStorage(APP_ID);

export const getBrowserLang = () => window.navigator.language || window.navigator.userLanguage;

export const setFavicon = (url) => {
  const node = document.querySelector('link[type="image/x-icon"]');

  if (node) {
    node.href = `${window.location.origin}${url}`;
  }
};

export const isLocalhost = () =>
  Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
  );
