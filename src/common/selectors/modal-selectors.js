import { createSelector } from 'reselect';
import { propOr, prop } from 'ramda';

const getModals = prop('modal');

export const getModal = (type) => createSelector(getModals, propOr({}, type));
