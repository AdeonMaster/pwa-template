import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const LoadingButton = ({ loading, children, ...otherProps }) => (
  <Button {...otherProps}>
    {loading && <FontAwesomeIcon icon={faCircleNotch} className="fa-spin mr-1" />}
    {children}
  </Button>
);

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default LoadingButton;
