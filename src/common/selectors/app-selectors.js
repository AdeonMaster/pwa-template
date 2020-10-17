import { prop, propOr } from 'ramda';
import { createSelector } from 'reselect';

import { LANG } from '~/common/constants';

const appProp = prop('app');

export const getLang = createSelector(appProp, propOr(LANG.EN, 'lang'));

export const getIsLoading = createSelector(appProp, propOr(true, 'isLoading'));

export const getVersion = createSelector(appProp, propOr('unknown', 'version'));

export const getIsMenuOpen = createSelector(appProp, propOr(false, 'isMenuOpen'));

export const getIsDarkMode = createSelector(appProp, propOr(false, 'isDarkMode'));
