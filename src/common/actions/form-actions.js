import FORM from '~/common/types/form-types';

export const setFormSuccess = (type, message = '') => ({
  type: FORM.SET_SUCCESS,
  payload: {
    type,
    message,
  },
});

export const setFormFailure = (type, message = '') => ({
  type: FORM.SET_FAILURE,
  payload: {
    type,
    message,
  },
});

export const setFormPending = (type) => ({
  type: FORM.SET_PENDING,
  payload: {
    type,
  },
});
