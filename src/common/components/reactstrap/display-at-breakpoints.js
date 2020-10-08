import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import classnames from '~/common/utils/classnames';

const DisplayAtBreakpoints = ({ breakpoints, display, children }) => {
  const className = useMemo(
    () => classnames(['d-none', ...breakpoints.map((breakpoint) => `d-${breakpoint}-${display}`)]),
    [breakpoints],
  );

  return <div className={className}>{children}</div>;
};

DisplayAtBreakpoints.propTypes = {
  breakpoints: PropTypes.array,
  display: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DisplayAtBreakpoints.defaultProps = {
  breakpoints: [],
  display: 'block',
};

export default DisplayAtBreakpoints;
