import React, { Component } from 'react';

export class Switch extends Component {

  constructor(props) {
    super(props) //initializes the component if you are defining properties for the child
    this.switchClicked = this.switchClicked.bind(this)
  }

  switchClicked() { //before constructor, did not know what 'this' referred to
    let value = this.headingElement.innerHTML
    if (value === "ON") {
      this.headingElement.innerHTML = "OFF"
    } else {
      this.headingElement.innerHTML = "ON"
    }
  }

  render() {
    return (
      <div className="switch">
        <h1 onClick={this.switchClicked} ref={(element) => this.headingElement = element}>OFF</h1>
      </div>
    );
  }

}
