import React, { Component } from 'react';

export class Stepper extends Component {

  constructor(props) {
    super(props);
    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue() {
    let value = this.currentValue.innerHTML;
    this.currentValue.innerHTML = parseInt(value) + 1;
  }

  decrementValue() {
    let value = this.currentValue.innerHTML;
    this.currentValue.innerHTML = parseInt(value) - 1;

  }

  render() {
    return (
      <div className="Counter">
        <div className="incrementValue" onClick={this.incrementValue} ref={(element) => this.incrementValue = element}>+</div>
        <div className="currentValue" ref={(element) => this.currentValue = element}>0</div>
        <div className="decrementValue" onClick={this.decrementValue} ref={(element) => this.decrementValue = element }>-</div>
      </div>
    );
  }

}
