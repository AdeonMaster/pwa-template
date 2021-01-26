import { pathOr } from 'ramda';

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

export const getErrorMessage = ({ type, message }, dictionary) =>
  message ||
  dictionary.get(
    DEFAULT_RULES.includes(type) ? `validation-rule.${type}` : 'validation-rule.default',
  );
