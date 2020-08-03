import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DrawerMenu from '~/common/components/menu-drawer';
import ToggleMenuItem from './toggle-menu-button';
import { getIsMenuOpen } from '~/common/selectors/app-selectors';
import { toggleMenu } from '~/common/actions/app-actions';
import { useLocalization } from '~/common/components/localization';

const SideMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);
  const handleToggle = useCallback(() => dispatch(toggleMenu(!isMenuOpen)), [isMenuOpen, dispatch]);
  const dictionary = useLocalization();

  return (
    <DrawerMenu isOpen={isMenuOpen} toggle={handleToggle} className="bg-light">
      <div className="p-2">
        <ToggleMenuItem onClick={handleToggle} />
      </div>

      <div className="nav nav-dark flex-column nav-pills p-2" aria-orientation="vertical">
        <NavLink exact className="nav-link" to="/">
          {dictionary.get('page.home')}
        </NavLink>
        <NavLink className="nav-link" to="/socket-example">
          {dictionary.get('page.socket-example')}
        </NavLink>
        <NavLink className="nav-link" to="/modal-example">
          {dictionary.get('page.modal-example')}
        </NavLink>
      </div>
    </DrawerMenu>
  );
};

export default SideMenu;
