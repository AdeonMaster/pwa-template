import { Input } from 'reactstrap';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { EMPTY_STRING } from '~/common/constants';

const DebouncedInput = ({ type, value, onChange, interval, ...otherProps }) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebouncedChange = useCallback(debounce(onChange, interval), [onChange, interval]);

  const handleInternalValueChange = useCallback(
    (event) => {
      setInternalValue(event.target.value);
      handleDebouncedChange(event.target.value);
    },
    [setInternalValue, handleDebouncedChange],
  );

  return (
    <Input type={type} value={internalValue} onChange={handleInternalValueChange} {...otherProps} />
  );
};

DebouncedInput.defaultProps = {
  type: 'text',
  value: EMPTY_STRING,
  interval: 300,
};

DebouncedInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  interval: PropTypes.number,
};

export default DebouncedInput;
