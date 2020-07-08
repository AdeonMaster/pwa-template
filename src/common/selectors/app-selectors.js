import { prop, propOr } from 'ramda';
import { createSelector } from 'reselect';

import { LANG } from '~/common/constants';

const getApp = prop('app');

export const getLang = createSelector(getApp, propOr(LANG.EN, 'lang'));

export const getIsLoading = createSelector(getApp, propOr(true, 'isLoading'));

export const getVersion = createSelector(getApp, propOr('unknown', 'version'));

export const getIsMenuOpen = createSelector(getApp, propOr(false, 'isMenuOpen'));
