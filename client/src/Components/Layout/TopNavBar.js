import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TopNavBar = () => {
  return (
    <Fragment>
      <ul className="topnavbar">
        <div>
          <li>Online Check In</li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
        <div className="navlogo">
          <li>
            <Link to="/">
              <p>TravoscopeHotels</p>
            </Link>
          </li>
        </div>
      </ul>
    </Fragment>
  );
};

export default TopNavBar;
