import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { propOrEmptyObject, propOrFalse } from '~/common/utils';

const modalProp = prop('modal');
const getModalType = (_, { modal: { type } }) => type;

export const getModal = createSelector(modalProp, getModalType, (modals, modalType) =>
  propOrEmptyObject(modalType, modals),
);

export const getModalIsOpen = createSelector(getModal, propOrFalse('isOpen'));

export const getModalParams = createSelector(getModal, propOrEmptyObject('params'));
