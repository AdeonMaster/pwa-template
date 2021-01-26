import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classnames from '~/common/utils/classnames';

import './input-icon-addon.scss';

const InputIconAddon = ({ icon, align, onClick, className, children }) => {
  const rootCombinedClassName = useMemo(
    () => classnames(['inner-addon', { [`${align}-addon`]: !!icon }]),
    [align, icon],
  );
  const iconCombinedClassName = useMemo(
    () => classnames(['glyphicon', { 'glyphicon-button': !!onClick }, className]),
    [className, onClick],
  );

  return (
    <div className={rootCombinedClassName}>
      <span className={iconCombinedClassName} onClick={onClick}>
        {icon && <FontAwesomeIcon icon={icon} />}
      </span>
      {children}
    </div>
  );
};

InputIconAddon.defaultProps = {
  align: 'left',
};

InputIconAddon.propTypes = {
  icon: PropTypes.any,
  align: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default InputIconAddon;
