import React from 'react';
import { render } from '@testing-library/react';

import ErrorBoundary from '../error-boundary';

// eslint-disable-next-line react/prop-types
const TestComponent = ({ items }) => <p>Items count: {items.length}</p>;

describe('ErrorBoundary', () => {
  it('should render properly with no errors', () => {
    const { container } = render(
      <ErrorBoundary>
        <TestComponent items={['First', 'Second']} />
      </ErrorBoundary>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly with errors', () => {
    // suppress console errors
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
