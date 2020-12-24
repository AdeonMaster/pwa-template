import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import classnames from '~/common/utils/classnames';
import './menu-drawer.scss';

const MenuDrawer = ({ isOpen, toggle, align, children, className }) => {
  const rootClassName = useMemo(() => classnames(['drawer-menu right', isOpen && 'shown']), [
    isOpen,
  ]);
  const sideClassName = useMemo(
    () => classnames(['drawer-menu-side', `align-${align}`, className]),
    [align, className],
  );

  useEffect(() => {
    document.body.classList.toggle('drawer-menu-shown', isOpen);
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
  align: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MenuDrawer.defaultProps = {
  align: 'left',
};

export default MenuDrawer;
