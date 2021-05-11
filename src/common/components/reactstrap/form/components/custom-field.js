import { useFormContext, useController } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import useDictionary from '~/common/hooks/localization/use-dictionary';

import { getErrorMessage, getError } from '../utils';

const CustomField = ({
  component: Component,
  name,
  defaultValue,
  rules,
  children,
  ...otherProps
}) => {
  const dictionary = useDictionary();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const errorMessage = getErrorMessage(getError(name, errors), dictionary);

  return (
    <>
      <Component invalid={invalid} {...otherProps} {...inputProps} innerRef={ref}>
        {children}
      </Component>
      {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
    </>
  );
};

CustomField.propTypes = {
  component: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  children: PropTypes.node,
  rules: PropTypes.object,
};

export default CustomField;
