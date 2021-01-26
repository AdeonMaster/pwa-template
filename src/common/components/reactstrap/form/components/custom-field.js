import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import { useCallback, useEffect } from 'react';

import useDictionary from '~/common/hooks/localization/use-dictionary';

import { getError, getErrorMessage } from '../utils';

const CustomField = ({ component: Component, name, children, rules = {}, ...props }) => {
  const dictionary = useDictionary();
  const { watch, setValue, register, errors } = useFormContext();

  const fieldError = getError(name, errors);
  const isInvalid = fieldError !== undefined;

  const value = watch(name);
  const handleChange = useCallback((value) => setValue(name, value), [name, setValue]);

  useEffect(() => {
    register({ name }, rules);
  }, [register, name, rules]);

  return (
    <>
      <Component name={name} {...props} value={value} onChange={handleChange} invalid={isInvalid}>
        {children}
      </Component>
      {isInvalid && <FormFeedback tooltip>{getErrorMessage(fieldError, dictionary)}</FormFeedback>}
    </>
  );
};

CustomField.propTypes = {
  component: PropTypes.any,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  rules: PropTypes.object,
};

export default CustomField;
