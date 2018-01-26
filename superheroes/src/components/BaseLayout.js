
import React, { Component } from 'react';

export class BaseLayout extends Component {

  render() {
    return (
      <div>
      <NavBar />
      {this.props.children}
      <Footer />
      </div>
    )
  }
}

export class NavBar extends Component {

  render() {
    return (
      <p>Navigation Bar</p>
    )
  }

}

export class Footer extends Component {

  render() {
    return (
      <p>Footer</p>
    )
  }

}
