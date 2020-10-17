import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useExtendedSelector from '~/common/hooks/use-extended-selector';
import { getModalIsOpen, getModalParams } from '~/common/selectors/modal-selectors';
import { closeModal, modalOpened, modalClosed } from '~/common/actions/modal-actions';

const useModal = (type) => {
  const props = { modal: { type } };

  const dispatch = useDispatch();
  const isOpen = useExtendedSelector(getModalIsOpen, props);
  const params = useExtendedSelector(getModalParams, props);

  const toggle = useCallback(() => dispatch(closeModal(type)), [dispatch, type]);
  const onOpened = useCallback(() => dispatch(modalOpened(type)), [dispatch, type]);
  const onClosed = useCallback(() => dispatch(modalClosed(type)), [dispatch, type]);

  return {
    isOpen,
    params,
    toggle,
    onOpened,
    onClosed,
  };
};

export default useModal;
