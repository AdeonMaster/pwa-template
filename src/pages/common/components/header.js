import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToggleMenuItem from './toggle-menu-button';
import { getIsMenuOpen } from '~/common/selectors/app-selectors';
import { toggleMenu } from '~/common/actions/app-actions';
import PreferencesMenuButton from './preferences-button';
import { openModal } from '~/common/actions/modal-actions';
import { MODAL } from '~/common/constants';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);

  const handleClick = useCallback(() => dispatch(toggleMenu(!isMenuOpen)), [isMenuOpen, dispatch]);
  const handlePreferencesModalOpen = useCallback(() => dispatch(openModal(MODAL.PREFERENCES)), [
    dispatch,
  ]);

  return (
    <div className="header p-2 d-flex justify-content-between">
      <ToggleMenuItem onClick={handleClick} />
      <PreferencesMenuButton onClick={handlePreferencesModalOpen} />
    </div>
  );
};

export default Header;
