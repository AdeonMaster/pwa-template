import MODAL from '~/common/types/modal-types';

export const openModal = (type = '', params = {}) => ({
  type: MODAL.OPEN,
  payload: {
    type,
    params,
  },
});

export const closeModal = (type) => ({
  type: MODAL.CLOSE,
  payload: {
    type,
  },
});

export const closeModals = () => ({
  type: MODAL.CLOSE_ALL,
});
