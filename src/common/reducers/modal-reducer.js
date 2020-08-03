import { mapObjIndexed, omit } from 'ramda';

import MODAL from '~/common/types/modal-types';

export const initialState = {};

const open = (state, { payload: { type, params } }) => ({
  ...state,
  [type]: {
    isOpen: true,
    params,
  },
});

const close = (state, { payload: { type } }) => ({
  ...state,
  [type]: {
    ...state[type],
    isOpen: false,
  },
});

const closeModals = mapObjIndexed((modal) => ({
  ...modal,
  isOpen: false,
}));

const modalClosed = (state, { payload: { type } }) => omit([type], state);

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL.OPEN:
      return open(state, action);

    case MODAL.CLOSE:
      return close(state, action);

    case MODAL.CLOSE_ALL:
      return closeModals(state);

    case MODAL.CLOSED:
      return modalClosed(state, action);

    default:
      return state;
  }
};
