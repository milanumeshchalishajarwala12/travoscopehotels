import React, { Component, Fragment } from 'react';
import AboutUs from './AboutUs';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <Fragment className="sidenav">
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/destinations">Destinaiton</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </Fragment>
    );
  }
}
export default Navbar;
