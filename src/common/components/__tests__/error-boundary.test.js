import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '~/store';

import ErrorBoundary from '../error-boundary';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

// eslint-disable-next-line react/prop-types
const TestComponent = ({ items }) => <p>Items count: {items.length}</p>;

describe('ErrorBoundary', () => {
  it('should render properly with no errors', () => {
    const { container } = render(
      <ErrorBoundary>
        <TestComponent items={['First', 'Second']} />
      </ErrorBoundary>,
      { wrapper },
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
      { wrapper },
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
