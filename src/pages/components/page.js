import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const rootClassName = 'bg-dark text-light h-100';
const wrapperStyle = {
  minHeight: '100vh',
};

const Page = ({ title, className, children, header }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div
      className={className ? `${rootClassName} ${className}` : rootClassName}
      style={wrapperStyle}
    >
      {header && <Header />}
      {children}
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  header: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  header: true,
};

export default Page;
