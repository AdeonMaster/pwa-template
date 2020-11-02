import { propOr } from 'ramda';
import { createSelector } from 'reselect';

import { propOrEmptyObject } from '~/common/utils';

const connectionProp = propOrEmptyObject('connection');

export const getConnectionStatus = createSelector(connectionProp, propOr('disconnected', 'status'));
