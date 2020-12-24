import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import classnames from '~/common/utils/classnames';

const TabList = ({ className, children }) => {
  const combinedClassName = useMemo(() => classnames(['tab-list', className]), [className]);

  return <div className={combinedClassName}>{children}</div>;
};

TabList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const TabListItem = ({ onClick, active, children }) => (
  <Button onClick={onClick} color={active ? 'primary' : 'white'} block className="text-left">
    {children}
  </Button>
);

TabListItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export { TabList, TabListItem };
