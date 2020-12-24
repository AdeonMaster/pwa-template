import { render } from '@testing-library/react';

import MenuDrawer from '../menu-drawer';

describe('MenuDrawer', () => {
  it('should render properly', () => {
    const { container } = render(
      <MenuDrawer isOpen={true} toggle={() => undefined}>
        <p>Drawer child content</p>
      </MenuDrawer>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
