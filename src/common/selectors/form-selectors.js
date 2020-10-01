import { prop, propOr } from 'ramda';
import { createSelector } from 'reselect';

const formProp = prop('form');
const propOrEmptyString = propOr('');

const getFormType = (_, { form: { type } }) => type;

export const getForm = createSelector(formProp, getFormType, (forms, formType) =>
  propOr({}, formType, forms),
);

export const getFormState = createSelector(getForm, propOrEmptyString('state'));

export const getFormMessage = createSelector(getForm, propOrEmptyString('message'));
