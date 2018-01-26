
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
      <NavBar />
        {this.props.children}

      </div>
    );
  }

}


export class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about-us'>About Us</Link></div>
        <div><Link to='/contact-us'>Contact Us</Link></div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>Copyright 2018</div>
      </div>
    )
  }

}
