import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DrawerMenu from '~/common/components/menu-drawer';
import MenuButton from './menu-button';
import { getIsMenuOpen } from '~/common/selectors/app-selectors';
import { toggleMenu } from '~/common/actions/app-actions';
import useDictionary from '~/common/hooks/localization/use-dictionary';

const SideMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);
  const dictionary = useDictionary();

  const handleMenuToggle = useCallback(() => dispatch(toggleMenu(!isMenuOpen)), [
    isMenuOpen,
    dispatch,
  ]);

  return (
    <DrawerMenu isOpen={isMenuOpen} toggle={handleMenuToggle}>
      <div className="p-2">
        <MenuButton onClick={handleMenuToggle} />
      </div>

      <div className="nav flex-column nav-pills p-2" aria-orientation="vertical">
        <NavLink exact className="nav-link" to="/">
          {dictionary.get('page.home')}
        </NavLink>
        <NavLink className="nav-link" to="/socket-example">
          {dictionary.get('page.socket-example')}
        </NavLink>
        <NavLink className="nav-link" to="/modal-example">
          {dictionary.get('page.modal-example')}
        </NavLink>
        <NavLink className="nav-link" to="/form-example">
          {dictionary.get('page.form-example')}
        </NavLink>
        <NavLink className="nav-link" to="/push-notification-example">
          {dictionary.get('page.push-notification-example')}
        </NavLink>
      </div>
    </DrawerMenu>
  );
};

export default SideMenu;
