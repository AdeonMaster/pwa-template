import React from 'react';
import { render } from '@testing-library/react';

import MarkupText from '../markup-text';

describe('markup-text', () => {
  it('should render properly', () => {
    const {
      container: { firstChild },
    } = render(<MarkupText content="<p>Hello world!</p>" />);

    expect(firstChild).toMatchSnapshot();
  });

  it('should render properly with different tag', () => {
    const {
      container: { firstChild },
    } = render(<MarkupText content="<p>Hello world!</p>" tag="a" />);

    expect(firstChild).toMatchSnapshot();
  });
});
