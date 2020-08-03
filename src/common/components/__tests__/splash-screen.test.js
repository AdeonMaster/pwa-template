import React from 'react';
import { render } from '@testing-library/react';

import SplashScreen from '../splash-screen';

describe('SplashScreen', () => {
  it('should render properly', () => {
    const { container } = render(<SplashScreen />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
