import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated } }) => {
  const authLinks = (
    <ul className="adminnavbar">
      <div className="navlogo">
        <li style={{ margin: '1rem', color: 'white', textDecoration: 'none' }}>
          <Link to="/">
            <p>TravoscopeHotels</p>
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li style={{ float: 'right', marginRight: '100px' }}>
          <Link to="/logout">Logout</Link>
        </li>
      </div>
    </ul>
  );

  const guestLinks = (
    <ul className="adminnavbar">
      <div className="navlogo">
        <li style={{ margin: '1rem', color: 'white', textDecoration: 'none' }}>
          <Link to="/">
            <p>TravoscopeHotels</p>
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
      </div>
    </ul>
  );

  return (
    <Fragment>{isAuthenticated === true ? authLinks : guestLinks}</Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Navbar);
