import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { crashError } from '~/common/actions/app-actions';

import ErrorScreen from './error-screen';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = () => ({
    hasError: true,
  });

  componentDidCatch = (error, errorInfo) => {
    const { crashError } = this.props;

    crashError(error.toString(), errorInfo);
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorScreen /> : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  crashError: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  crashError,
};

export default connect(null, mapDispatchToProps)(ErrorBoundary);
