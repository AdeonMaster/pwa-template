import React from 'react';
import { render } from '@testing-library/react';

import LoadingButton from '../loading-button';

describe('loading-button', () => {
  it('should render properly when loading is false', () => {
    const { container } = render(<LoadingButton color="primary">Click Me</LoadingButton>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly when loading is true', () => {
    const { container } = render(
      <LoadingButton color="primary" loading>
        Click Me
      </LoadingButton>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
