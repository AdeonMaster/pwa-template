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

export const isCookieEnabled = () => {
  try {
    if (window.navigator.cookieEnabled) {
      return true;
    }

    document.cookie = 'testcookie';
    const cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
    document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';

    return cookieEnabled;
  } catch (error) {
    return false;
  }
};

export const getBrowserLang = () => window.navigator.language || window.navigator.userLanguage;

export const setFavicon = (url) => {
  const node = document.querySelector('link[type="image/x-icon"]');

  if (node) {
    node.href = `${window.location.origin}${url}`;
  }
};
