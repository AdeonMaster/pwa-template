import React from 'react';
import { render } from '@testing-library/react';

import DisplayAtBreakpoint from '../display-at-breakpoint';

describe('display-at-breakpoint', () => {
  it('should render properly', () => {
    const { container } = render(
      <DisplayAtBreakpoint breakpoint="sm">
        <p>This text is visible only at sm breakpoint</p>
      </DisplayAtBreakpoint>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with custom display', () => {
    const { container } = render(
      <DisplayAtBreakpoint breakpoint="sm" display="inline">
        <p>This text is visible only at sm breakpoint</p>
      </DisplayAtBreakpoint>,
    );

    expect(container.firstChild).toHaveClass('d-sm-inline');
  });
});
