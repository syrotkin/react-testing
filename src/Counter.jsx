import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.incrementCounter = this.incrementCounter.bind(this);
  }

  // can use a const and don't need a constructor
  incrementCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="hello">
        <button
          type="button"
          data-testid="counter-button"
          onClick={this.incrementCounter}
        >
          {count}
        </button>
      </div>
    );
  }
}
