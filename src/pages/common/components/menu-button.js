import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const rootClassName = 'btn';

const ToggleMenuItem = ({ className, onClick }) => (
  <button
    className={className ? `${rootClassName} ${className}` : rootClassName}
    onClick={onClick}
    aria-label="Toggle menu button"
  >
    <FontAwesomeIcon icon={faBars} />
  </button>
);

ToggleMenuItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ToggleMenuItem;
