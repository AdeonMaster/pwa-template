import React from 'react';
import { render } from '@testing-library/react';

import { Switch, Case, Default } from '../switch-case';

describe('switch-case conditional rendering utils', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render properly', () => {
    const { getByText } = render(
      <Switch condition="bar">
        <Case value="foo">Foo</Case>
        <Case value="bar">Bar</Case>
        <Case value="baz">Baz</Case>
      </Switch>,
    );

    const node = getByText('Bar');

    expect(node).toBeVisible();
  });

  it('should render properly with default case', () => {
    const { getByText } = render(
      <Switch condition="baz">
        <Case value="foo">Foo</Case>
        <Case value="bar">Bar</Case>
        <Default>Baz</Default>
      </Switch>,
    );

    const node = getByText('Baz');

    expect(node).toBeVisible();
  });

  it('should throw error on multiple cases with the same values', () => {
    expect(() =>
      render(
        <Switch condition="bar">
          <Case value="foo">Foo</Case>
          <Case value="bar">Bar</Case>
          <Case value="bar">Bar</Case>
        </Switch>,
      ),
    ).toThrowError();
  });

  it('should throw error on missing default case', () => {
    expect(() =>
      render(
        <Switch condition="baz">
          <Case value="foo">Foo</Case>
          <Case value="bar">Bar</Case>
        </Switch>,
      ),
    ).toThrow();
  });

  it('should throw error on multiple default cases', () => {
    expect(() =>
      render(
        <Switch condition="baz">
          <Case value="foo">Foo</Case>
          <Default>Bar</Default>
          <Default>Baz</Default>
        </Switch>,
      ),
    ).toThrow();
  });

  it('should throw error on invalid child component', () => {
    expect(() =>
      render(
        <Switch condition="baz">
          <Case value="foo">Foo</Case>
          <Case value="bar">Bar</Case>
          <p>Error cause</p>
          <Default>Baz</Default>
        </Switch>,
      ),
    ).toThrow();
  });
});
