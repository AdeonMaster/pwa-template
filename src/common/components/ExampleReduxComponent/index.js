import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement, add } from '~/common/redux/example/actions';

class ExampleReduxComponent extends Component {
  handleButtonClick = type => () => {
    const { increment, decrement, add } = this.props;

    /* eslint-disable-next-line default-case */
    switch (type) {
      case 'increment': {
        increment();
        break;
      }

      case 'decrement': {
        decrement();
        break;
      }

      case 'add': {
        add(2);
        break;
      }
    }
  }

  render() {
    const { value } = this.props;

    return (
      <>
        <p>Redux value: {value}</p>
        <button onClick={this.handleButtonClick('increment')}>Increment</button>
        <button onClick={this.handleButtonClick('decrement')}>Decrement</button>
        <button onClick={this.handleButtonClick('add')}>Add 2</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  value: state.example.value
});

const mapDispatchToProps = {
  increment,
  decrement,
  add
};

ExampleReduxComponent.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleReduxComponent);
