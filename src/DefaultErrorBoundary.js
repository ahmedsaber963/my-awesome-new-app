import React from 'react';
import propTypes from 'prop-types';

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false,
  };
  static getDerivedStateFromError() {
    return { isError: true };
  }
  static propTypes = {
    children: propTypes.node.isRequired,
  };
  render() {
    const { children } = this.props;
    return this.state.isError ? <div>Ops, something went wrong</div> : children;
  }
}

export default DefaultErrorBoundary;
