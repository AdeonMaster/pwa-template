import { prop } from 'ramda';
import { createSelector } from 'reselect';

import { propOrEmptyString, propOrEmptyObject } from '~/common/utils';

const formProp = prop('form');
const getFormType = (_, { form: { type } }) => type;

export const getForm = createSelector(formProp, getFormType, (forms, formType) =>
  propOrEmptyObject(formType, forms),
);

export const getFormState = createSelector(getForm, propOrEmptyString('state'));

export const getFormMessage = createSelector(getForm, propOrEmptyString('message'));
