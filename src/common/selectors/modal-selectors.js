import { createSelector } from 'reselect';
import { propOr, prop } from 'ramda';

const modalProp = prop('modal');
const propOrEmptyObject = propOr({});

const getModalType = (_, { modal: { type } }) => type;

export const getModal = createSelector(modalProp, getModalType, (modals, modalType) =>
  propOrEmptyObject(modalType, modals),
);

export const getModalIsOpen = createSelector(getModal, propOr(false, 'isOpen'));

export const getModalParams = createSelector(getModal, propOrEmptyObject('params'));
