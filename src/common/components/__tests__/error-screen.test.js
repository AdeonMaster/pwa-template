import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '~/store';

import ErrorScreen from '../error-screen';

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('ErrorScreen', () => {
  it('should render properly', () => {
    const { container } = render(<ErrorScreen />, { wrapper });

    expect(container.firstChild).toMatchSnapshot();
  });
});
