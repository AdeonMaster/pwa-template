import { propOr } from 'ramda';
import { createSelector } from 'reselect';

const connectionProp = propOr({}, 'connection');

export const getConnectionStatus = createSelector(connectionProp, propOr('disconnected', 'status'));
