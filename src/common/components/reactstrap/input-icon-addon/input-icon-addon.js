import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classnames from '~/common/utils/classnames';

import './input-icon-addon.scss';

const InputIconAddon = ({ icon, side, className, children }) => {
  const combinedClassName = classnames(['inner-addon', `${side}-addon`, className]);

  return (
    <div className={combinedClassName}>
      <span className="glyphicon">
        <FontAwesomeIcon icon={icon} />
      </span>
      {children}
    </div>
  );
};

InputIconAddon.defaultProps = {
  side: 'left',
};

InputIconAddon.propTypes = {
  icon: PropTypes.any.isRequired,
  side: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default InputIconAddon;
