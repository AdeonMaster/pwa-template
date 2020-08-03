import React from 'react';
import { render } from '@testing-library/react';

import MarkupText from '../markup-text';

describe('MarkupText', () => {
  it('should render properly', () => {
    const { container } = render(<MarkupText content="<p>Hello world!</p>" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with different tag', () => {
    const { container } = render(<MarkupText content="<p>Hello world!</p>" tag="a" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
