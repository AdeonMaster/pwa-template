import FORM from '~/common/types/form-types';
import { FORM_STATE } from '~/common/constants';

export const initialState = {};

const setSuccess = (state, { payload: { type, message } }) => ({
  ...state,
  [type]: {
    state: FORM_STATE.SUCCESS,
    message,
  },
});

const setFailure = (state, { payload: { type, message } }) => ({
  ...state,
  [type]: {
    state: FORM_STATE.FAILURE,
    message,
  },
});

const setPending = (state, { payload: { type } }) => ({
  ...state,
  [type]: {
    state: FORM_STATE.PENDING,
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM.SET_SUCCESS:
      return setSuccess(state, action);

    case FORM.SET_FAILURE:
      return setFailure(state, action);

    case FORM.SET_PENDING:
      return setPending(state, action);

    default:
      return state;
  }
};
