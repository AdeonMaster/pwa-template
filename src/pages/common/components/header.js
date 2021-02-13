import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIsMenuOpen } from '~/common/selectors/app-selectors';
import { toggleMenu } from '~/common/actions/app-actions';
import { openModal } from '~/common/actions/modal-actions';
import { MODAL } from '~/common/constants';

import MenuButton from './menu-button';
import PreferencesMenuButton from './preferences-button';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);

  const handleMenuOpen = useCallback(() => dispatch(toggleMenu(!isMenuOpen)), [
    isMenuOpen,
    dispatch,
  ]);
  const handlePreferencesModalOpen = useCallback(() => dispatch(openModal(MODAL.PREFERENCES)), [
    dispatch,
  ]);

  return (
    <header className="header p-2 d-flex justify-content-between">
      <MenuButton onClick={handleMenuOpen} />
      <PreferencesMenuButton onClick={handlePreferencesModalOpen} />
    </header>
  );
};

export default Header;
