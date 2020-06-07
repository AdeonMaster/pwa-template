import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorScreen from './error-screen';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = () => ({
    hasError: true,
  });

  // componentDidCatch = (error, errorInfo) => {
  //   console.log(error, errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorScreen /> : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
