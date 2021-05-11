import { useState, useCallback, useMemo } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { EMPTY_STRING } from '~/common/constants';
import classnames from '~/common/utils/classnames';

const preventDefault = (event) => event.preventDefault();

const DropdownSelect = ({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  className,
  valid,
  invalid,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  const handleOptionClick = useCallback(
    (optionValue) => () => {
      onChange(optionValue);
    },
    [onChange],
  );

  const optionsNodes = useMemo(
    () =>
      options.map((option) => (
        <DropdownItem
          key={option.value}
          active={value === option.value}
          onClick={handleOptionClick(option.value)}
        >
          {option.displayValue}
        </DropdownItem>
      )),
    [options, value, handleOptionClick],
  );

  const displayValue = useMemo(() => {
    if (!options.length || !value) {
      return placeholder;
    }

    const option = options.find((option) => option.value === value);
    if (option) {
      return option.displayValue;
    }

    return value;
  }, [value, options, placeholder]);

  const combinedClassName = useMemo(
    () =>
      classnames([
        'custom-select text-left',
        {
          disabled,
          'is-valid': valid,
          'is-invalid': invalid,
        },
        className,
      ]),
    [className, disabled, valid, invalid],
  );
  const rootCombinedClassName = useMemo(
    () =>
      classnames([
        {
          'is-valid': valid,
          'is-invalid': invalid,
        },
        className,
      ]),
    [className, valid, invalid],
  );

  return (
    <Dropdown isOpen={isOpen} toggle={toggle} className={rootCombinedClassName}>
      <DropdownToggle
        tag="button"
        className={combinedClassName}
        disabled={disabled}
        onClick={preventDefault}
      >
        {displayValue}
      </DropdownToggle>
      <DropdownMenu>{optionsNodes}</DropdownMenu>
    </Dropdown>
  );
};

DropdownSelect.defaultProps = {
  placeholder: EMPTY_STRING,
};

DropdownSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      displayValue: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default DropdownSelect;
