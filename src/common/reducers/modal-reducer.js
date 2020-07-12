import { forEachObjIndexed } from 'ramda';

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

const closeModals = (state) =>
  forEachObjIndexed(
    (modal) => ({
      ...modal,
      isOpen: false,
    }),
    state,
  );

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL.OPEN:
      return open(state, action);

    case MODAL.CLOSE:
      return close(state, action);

    case MODAL.CLOSE_ALL:
      return closeModals(state);

    default:
      return state;
  }
};
