import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getBookings } from '../../actions/booking';

const TopNavBar = ({
  logout,
  getBookings,
  auth: { isAuthenticated },
  user: { firstname, lastname, email },
}) => {
  const authLinks = (
    <ul className="topnavbar">
      <div>
        <li onClick={(e) => logout()}>Logout</li>
        <li>
          <Link to="/makeareservation">Make a Reservation</Link>
        </li>
        <li>
          <Link to="/mybookings" onClick={(e) => getBookings(email)}>
            My Bookings
          </Link>
        </li>
        <Link to="/checkin" onClick={(e) => getBookings(email)}>
          <li>Check-In Online</li>
        </Link>{' '}
      </div>
      <div className="navlogo">
        <li>
          <Link to="/">
            <p>TravoscopeHotels</p>
          </Link>
        </li>
      </div>
      <button>
        <li style={{ fontSize: '1rem' }}>
          {firstname} {lastname}
        </li>
      </button>
    </ul>
  );

  const guestLinks = (
    <ul className="topnavbar">
      <div>
        <li>About Us</li>
        <li>
          <Link to="/makeareservation">Make a Reservation</Link>
        </li>
      </div>
      <div className="navlogo">
        <li>
          <Link to="/">
            <p>TravoscopeHotels</p>
          </Link>
        </li>
      </div>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button
        style={{
          padding: '10px',
          borderRadius: '5%',
          border: '1px solid black',
        }}
      >
        <Link to="/signup">Sign Up</Link>
      </button>
    </ul>
  );

  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};

TopNavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getBookings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { logout, getBookings })(TopNavBar);
