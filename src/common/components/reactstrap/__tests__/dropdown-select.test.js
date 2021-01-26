import { render } from '@testing-library/react';
import { useState, useCallback } from 'react';

import DropdownSelect from '../dropdown-select';

const options = [
  { value: 'first', displayValue: 'First' },
  { value: 'second', displayValue: 'Second' },
  { value: 'third', displayValue: 'Third' },
];

const WrapperComponent = () => {
  const [value, setValue] = useState(options[1].value);

  const handleChange = useCallback((selectedValue) => setValue(selectedValue), [setValue]);

  return (
    <DropdownSelect placeholder="Select" options={options} value={value} onChange={handleChange} />
  );
};

describe('input-icon-addon', () => {
  it('should render properly', () => {
    const { container } = render(<WrapperComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
