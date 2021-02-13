import { useState, useCallback, useMemo } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { split, replace, toLower, all, flip, includes } from 'ramda';

import classnames from '~/common/utils/classnames';
import InputIconAddon from '~/common/components/reactstrap/input-icon-addon';
import useDictionary from '~/common/hooks/localization/use-dictionary';
import './dropdown-search-select.scss';

const DIVIDER = ' ';
const WHITESPACES_REGEXPR = /\s+/g;

// search query utils
const toSearchTags = (searchValue) =>
  split(DIVIDER, replace(WHITESPACES_REGEXPR, DIVIDER, toLower(searchValue)));
const doesStringContainsTags = (str, tags) => all(flip(includes)(str), tags);

const preventDefault = (event) => event.preventDefault();

const DropdownSearchSelect = ({
  value,
  onChange,
  onClear,
  options,
  placeholder,
  disabled,
  className,
  valid,
  invalid,
}) => {
  const dictionary = useDictionary();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  const handleOptionClick = useCallback(
    (optionValue) => () => {
      onChange(optionValue);
    },
    [onChange],
  );

  const handleSearch = useCallback((event) => setSearchValue(event.target.value), [setSearchValue]);
  const handleClear = useCallback(() => {
    setSearchValue('');
    onClear();
  }, [setSearchValue, onClear]);

  const optionsNodes = useMemo(() => {
    const searchTags = toSearchTags(searchValue);

    const filteredOptions = !searchTags.length
      ? options
      : options.filter(({ displayValue, skip }) =>
          skip ? true : doesStringContainsTags(toLower(displayValue), searchTags),
        );

    return filteredOptions.map((option) => (
      <DropdownItem
        key={option.value}
        active={value === option.value}
        onClick={handleOptionClick(option.value)}
      >
        {option.displayValue}
      </DropdownItem>
    ));
  }, [options, value, searchValue, handleOptionClick]);

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

  return (
    <Dropdown isOpen={isOpen} toggle={toggle} className="dropdown-search-select">
      <DropdownToggle
        tag="button"
        className={combinedClassName}
        disabled={disabled}
        onClick={preventDefault}
      >
        {displayValue}
      </DropdownToggle>
      <DropdownMenu>
        <div className="px-2">
          <InputIconAddon
            align="right"
            icon={searchValue === '' ? null : faTimes}
            onClick={handleClear}
            className="clear-icon"
          >
            <Input
              type="text"
              placeholder={dictionary.get('search')}
              value={searchValue}
              onChange={handleSearch}
            />
          </InputIconAddon>
        </div>
        <DropdownItem divider />
        <div className="drowdown-menu-container">
          {!optionsNodes.length ? (
            <div className="text-center">{dictionary.get('no-items-found')}</div>
          ) : (
            optionsNodes
          )}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

DropdownSearchSelect.defaultProps = {
  placeholder: '',
  onClear: () => undefined,
};

DropdownSearchSelect.propTypes = {
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
  onClear: PropTypes.func,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

export default DropdownSearchSelect;
