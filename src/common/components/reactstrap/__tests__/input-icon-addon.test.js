import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';

import { Input } from 'reactstrap';
import InputIconAddon from '../input-icon-addon';

describe('input-icon-addon', () => {
  it('should render properly', () => {
    const { container } = render(
      <InputIconAddon icon={faUser}>
        <Input type="text" name="user-name" />
      </InputIconAddon>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render properly when side is right', () => {
    const { container } = render(
      <InputIconAddon icon={faUser} side="right">
        <Input type="text" name="user-name" />
      </InputIconAddon>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
