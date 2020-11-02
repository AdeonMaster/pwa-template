import { prop, propOr } from 'ramda';
import { createSelector } from 'reselect';

import { LANG } from '~/common/constants';
import {
  propOrTrue,
  propOrFalse,
  propOrEmptyString,
  namespacedLocalStorage,
  getBrowserLang,
} from '~/common/utils';

const appProp = prop('app');

export const getVersion = createSelector(appProp, propOr('1.0.0', 'version'));

export const getLang = createSelector(
  appProp,
  propOr(
    namespacedLocalStorage.getItem('lang') ||
      LANG[(getBrowserLang() || '').split('-')[1]] ||
      LANG.EN,
    'lang',
  ),
);

export const getIsLoading = createSelector(appProp, propOrTrue('isLoading'));

export const getError = createSelector(appProp, propOrEmptyString('error'));

export const getIsMenuOpen = createSelector(appProp, propOrFalse('isMenuOpen'));

export const getIsDarkMode = createSelector(appProp, propOrFalse('isDarkMode'));
