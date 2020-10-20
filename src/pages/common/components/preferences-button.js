import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const rootClassName = 'btn';

const PreferencesMenuButton = ({ className, onClick }) => (
  <button
    className={className ? `${rootClassName} ${className}` : rootClassName}
    onClick={onClick}
    aria-label="Preferences button"
  >
    <FontAwesomeIcon icon={faCog} />
  </button>
);

PreferencesMenuButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PreferencesMenuButton;
