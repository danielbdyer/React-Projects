import React, { Component } from "react";

export class Hello extends Component {
  render() {
    return (
      <h1>Hello {this.props.name} with {this.props.catname}</h1>
    )
  }
}

// module.exports = Hello | deprecated in ES6
