import { find, propEq } from 'ramda';

import { APP_ID } from '~/common/constants';
import NamespacedLocalStorage from '~/common/utils/namespaced-local-storage';

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

export const switchTheme = (themeName) => {
  const theme = find(propEq('name', themeName), window.bootstrapThemes || []);

  if (!theme) {
    // eslint-disable-next-line no-console
    console.warn(`Can't find theme with name "${themeName}"`);
    return false;
  }

  const stylesheetLinkNode = document.querySelector('link#theme');
  if (!stylesheetLinkNode) {
    // eslint-disable-next-line no-console
    console.warn(`Can't find valid stylesheet node to apply new theme`);
    return false;
  }

  stylesheetLinkNode.href = theme.entryKey;
  return true;
};
