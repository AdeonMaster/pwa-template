import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Input, CustomInput, FormFeedback } from 'reactstrap';

import useDictionary from '~/common/hooks/localization/use-dictionary';

import { getError, getErrorMessage } from '../utils';

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
