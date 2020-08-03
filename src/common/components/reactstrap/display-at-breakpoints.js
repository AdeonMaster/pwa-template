import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import classnames from '~/common/utils/classnames';

const DisplayAtBreakpoints = ({ breakpoints, children }) => {
  const className = useMemo(
    () => classnames(['d-none', ...breakpoints.map((breakpoint) => `d-${breakpoint}-block`)]),
    [breakpoints],
  );

  return <div className={className}>{children}</div>;
};

DisplayAtBreakpoints.defaultProps = {
  breakpoints: [],
};

DisplayAtBreakpoints.propTypes = {
  breakpoints: PropTypes.array,
  children: PropTypes.node.isRequired,
};

export default DisplayAtBreakpoints;
