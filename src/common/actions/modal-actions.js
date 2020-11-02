import { EMPTY_STRING } from '~/common/constants';
import MODAL from '~/common/types/modal-types';

export const openModal = (type = EMPTY_STRING, params = {}) => ({
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

export const modalOpened = (type) => ({
  type: MODAL.OPENED,
  payload: {
    type,
  },
});

export const modalClosed = (type) => ({
  type: MODAL.CLOSED,
  payload: {
    type,
  },
});
