import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToggleMenuItem from './toggle-menu-button';
import { getIsMenuOpen } from '~/common/selectors/app-selectors';
import { toggleMenu } from '~/common/actions/app-actions';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);
  const handleClick = useCallback(() => dispatch(toggleMenu(!isMenuOpen)), [isMenuOpen, dispatch]);

  return (
    <div className="header p-2">
      <ToggleMenuItem className="text-light" onClick={handleClick} />
    </div>
  );
};

export default Header;
