import { pathOr } from 'ramda';

import { EMPTY_STRING } from '~/common/constants';

export const DEFAULT_RULES = [
  'required',
  'pattern',
  'validator',
  'maxLength',
  'minLength',
  'max',
  'min',
];

const errorRegExpr = /(?:\[(\d+)\])/g;

export const getError = (name, errors) =>
  pathOr(undefined, name.replace(errorRegExpr, '.$1').split('.'), errors);

export const getErrorMessage = (error, dictionary) =>
  error
    ? error.message ||
      dictionary.get(
        DEFAULT_RULES.includes(error.type)
          ? `validation-rule.${error.type}`
          : 'validation-rule.default',
      )
    : EMPTY_STRING;
