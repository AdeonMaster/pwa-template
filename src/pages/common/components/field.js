import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Input, CustomInput, FormFeedback } from 'reactstrap';
import { pathOr } from 'ramda';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

const allowedRuleTypes = [
  'required',
  'pattern',
  'validator',
  'maxLength',
  'minLength',
  'max',
  'min',
];

const getError = (name, errors) =>
  pathOr(undefined, name.replace(/(?:\[(\d+)\])/g, '.$1').split('.'), errors);

const getErrorMessage = ({ type, message }, dictionary) =>
  message ||
  dictionary.get(
    allowedRuleTypes.includes(type) ? `validation-rule.${type}` : 'validation-rule.default',
  );

const Field = ({ type = 'text', name, children, rules = {}, ...props }) => {
  const dictionary = useDictionary();
  const { register, errors } = useFormContext();

  const fieldError = getError(name, errors);
  const isInvalid = fieldError !== undefined;

  const Component = useMemo(() => {
    switch (type) {
      case 'select':
      case 'checkbox':
      case 'radio':
        return CustomInput;

      default:
        return Input;
    }
  }, [type]);

  return (
    <>
      <Component type={type} name={name} {...props} innerRef={register(rules)} invalid={isInvalid}>
        {children}
      </Component>
      {isInvalid && <FormFeedback tooltip>{getErrorMessage(fieldError, dictionary)}</FormFeedback>}
    </>
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  rules: PropTypes.object,
};

export default Field;
