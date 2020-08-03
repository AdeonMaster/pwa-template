import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal, modalOpened, modalClosed } from '~/common/actions/modal-actions';
import { getModal } from '../selectors/modal-selectors';

const withModal = (type) => (ModalComponent) => ({ onOpened, onClosed, ...otherProps }) => {
  const dispatch = useDispatch();
  const { isOpen = false, params = {} } = useSelector(getModal(type));

  const handleToggle = useCallback(() => dispatch(closeModal(type)), [dispatch]);
  const handleOpened = useCallback(() => {
    dispatch(modalOpened(type));

    if (onOpened) {
      onOpened();
    }
  }, [dispatch, onOpened]);
  const handleClosed = useCallback(() => {
    dispatch(modalClosed(type));

    if (onClosed) {
      onClosed();
    }
  }, [dispatch, onClosed]);

  return (
    <ModalComponent
      isOpen={isOpen}
      params={params}
      toggle={handleToggle}
      onOpened={handleOpened}
      onClosed={handleClosed}
      {...otherProps}
    />
  );
};

export default withModal;
