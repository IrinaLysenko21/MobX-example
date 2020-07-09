import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  increaseCounter = () => {
    this.props.store.counterIncrement();
  };

  decreaseCounter = () => {
    this.props.store.counterDecrement();
  };

  render() {
    const { store } = this.props;

    return (
      <>
        <div className="counter-wrapper">
          <button className="counter-btn" onClick={this.decreaseCounter}>
            -1
          </button>
          <p className="counter">{store.counter}</p>
          <button className="counter-btn" onClick={this.increaseCounter}>
            1
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
