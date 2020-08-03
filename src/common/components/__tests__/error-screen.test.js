import React from 'react';
import { render } from '@testing-library/react';

import ErrorScreen from '../error-screen';

describe('ErrorScreen', () => {
  it('should render properly', () => {
    const { container } = render(<ErrorScreen />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
