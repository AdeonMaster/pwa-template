import PropTypes from 'prop-types';

const DisplayAtBreakpoint = ({ breakpoint, children, display }) => (
  <div className={`d-none d-${breakpoint}-${display}`}>{children}</div>
);

DisplayAtBreakpoint.propTypes = {
  breakpoint: PropTypes.string,
  display: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DisplayAtBreakpoint.defaultProps = {
  display: 'block',
};

export default DisplayAtBreakpoint;
