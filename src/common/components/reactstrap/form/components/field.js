import { useFormContext } from 'react-hook-form';
import { useMemo } from 'react';
import { Input, CustomInput, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import useDictionary from '~/common/hooks/localization/use-dictionary';

import { getErrorMessage, getError } from '../utils';

const Field = ({ type, name, rules, children, ...otherProps }) => {
  const dictionary = useDictionary();
  const {
    register,
    formState: { errors },
  } = useFormContext();

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

  const { ref, ...otherFieldProps } = register(name, rules);

  const errorMessage = getErrorMessage(getError(name, errors), dictionary);

  return (
    <>
      <Component
        innerRef={ref}
        type={type}
        invalid={!!errorMessage}
        {...otherFieldProps}
        {...otherProps}
      >
        {children}
      </Component>
      {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
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
