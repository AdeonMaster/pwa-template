import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classnames from '~/common/utils/classnames';
import './menu-drawer.scss';

const MenuDrawer = ({ isOpen, toggle, children, className }) => {
  const rootClassName = classnames(['drawer-menu', isOpen && 'shown']);

  const sideClassName = classnames(['drawer-menu-side', className]);

  useEffect(() => {
    document.body.classList.toggle('drawer-menu-open', isOpen);
  }, [isOpen]);

  return (
    <div className={rootClassName}>
      <div className="drawer-menu-backdrop" onClick={toggle}></div>
      <div className={sideClassName}>{children}</div>
    </div>
  );
};

MenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MenuDrawer;
