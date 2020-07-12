import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '~/common/actions/modal-actions';
import { getModal } from '../selectors/modal-selectors';

const withModal = (type) => (ModalComponent) => (props) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(closeModal(type));
  const { isOpen = false, params = {} } = useSelector(getModal(type));

  return <ModalComponent isOpen={isOpen} params={params} toggle={handleToggle} {...props} />;
};

export default withModal;
