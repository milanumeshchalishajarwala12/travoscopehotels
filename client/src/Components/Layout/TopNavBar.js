import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getBookings, getaddbookings } from '../../actions/booking';
import { getMenu } from '../../actions/location';
import Button from '@material-ui/core/Button';

const TopNavBar = ({
  logout,
  getBookings,
  getaddbookings,
  getMenu,
  auth: { isAuthenticated },
  user: { firstname, lastname, email, isCheckedIn }
}) => {
  var location = 'Seattle, WA';
  const myProfile = e => {
    getBookings(email);
    //getaddbookings(email);
  };
  const authLinks = (
    <div>
      <ul className="topnavbar">
        <div>
          <li onClick={e => logout()}>Logout</li>
          <li>
            <Link to="/makeareservation">Make a Reservation</Link>
          </li>

          <Link to="/checkin" onClick={e => getBookings(email)}>
            <li>Check-In/Check-Out</li>
          </Link>
          <Link to="/amenities">
            <li>Amenities</li>
          </Link>
          <Link to="/dining" onClick={e => getMenu(location)}>
            <li>Dining</li>
          </Link>
        </div>
        <div className="navlogo">
          <li>
            <Link to="/">
              <p>TravoscopeHotels</p>
            </Link>
          </li>
        </div>
        <Link to="/profile" onClick={e => myProfile(e)}>
          <Button
            style={{
              color: 'black',
              fontFamily: 'Times New Roman',
              height: '2rem'
            }}
          >
            {firstname} {lastname}
          </Button>
        </Link>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className="topnavbar">
      <div>
        <li>About Us</li>
        <li>
          <Link to="/makeareservation">Make a Reservation</Link>
        </li>
        <Link to="/amenities">
          <li>Amenities</li>
        </Link>
      </div>
      <div className="navlogo">
        <li>
          <Link to="/">
            <p>TravoscopeHotels</p>
          </Link>
        </li>
      </div>
      <button style={{ color: 'black' }}>
        <Link to="/login">Login</Link>
      </button>
      <button
        style={{
          color: 'black',
          padding: '10px',
          borderRadius: '5%',
          border: '1px solid black'
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
  getaddbookings: PropTypes.func.isRequired,
  getMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(mapStateToProps, {
  logout,
  getBookings,
  getaddbookings,
  getMenu
})(TopNavBar);
