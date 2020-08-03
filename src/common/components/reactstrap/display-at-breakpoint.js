import React from 'react';
import PropTypes from 'prop-types';

const DisplayAtBreakpoint = ({ breakpoint, children }) => (
  <div className={`d-none d-${breakpoint}-block`}>{children}</div>
);

DisplayAtBreakpoint.propTypes = {
  breakpoint: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DisplayAtBreakpoint;
