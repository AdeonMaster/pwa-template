import React from 'react';
import { render } from '@testing-library/react';

import DisplayAtBreakpoints from '../display-at-breakpoints';

describe('display-at-breakpoints', () => {
  it('should render properly', () => {
    const { container } = render(
      <DisplayAtBreakpoints breakpoints={['md', 'lg']}>
        <p>This text is visible only at md and lg breakpoint</p>
      </DisplayAtBreakpoints>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with custom display', () => {
    const { container } = render(
      <DisplayAtBreakpoints breakpoints={['md', 'lg']} display="inline">
        <p>This text is visible only at md and lg breakpoint</p>
      </DisplayAtBreakpoints>,
    );

    expect(container.firstChild).toHaveClass('d-md-inline');
    expect(container.firstChild).toHaveClass('d-lg-inline');
  });
});
