import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

export const Signup = ({ auth: { isAuthenticated }, registerUser }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  });

  const { firstname, lastname, email, phone, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert('Passwords do not match');
    } else {
      registerUser({ firstname, lastname, email, phone, password });
      window.location.reload(true);
    }
  };

  return (
    <Fragment>
      <div className="signuppage">
        <div className="signuppagetext">
          <h2>Travoscope Hotels</h2>
          <p>
            Bringing people together is what we’ve done since opening our first
            hotel in 1937. Now we’re deeply rooted in over 400 communities
            across the globe. We are proud to act as a point of connection for
            millions of travelers, many just like you. Welcome.
          </p>
          <div className="signuptextsection"></div>
          <ul>
            <li>Enjoy our resonable rates, everytime you book</li>
            <li>Free airport pickup and drop</li>
            <li>Earn loyality points</li>
            <li>Wifi connectivity in every room</li>
          </ul>
        </div>

        <div className="vl"></div>
        <div className="signupcontainer">
          <p> Join Travoscope Hotels</p>

          <form
            onSubmit={(e) => onSubmit(e)}
            style={{
              position: 'relative',
              height: '30rem',
              width: 'auto',
            }}
          >
            <TextField
              type="text"
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="First Name"
              name="firstname"
              value={firstname}
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="Last Name"
              type="text"
              value={lastname}
              name="lastname"
              onChange={(e) => onChange(e)}
            />
            <br />
            <TextField
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="Email Id"
              type="email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="Phone"
              type="number"
              value={phone}
              name="phone"
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '50%', margin: '20px 0px 20px 0px' }}
              label="Confirm Password"
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
            <br />

            <Button
              style={{
                width: '40%',
                margin: '20px 0px 20px 0px',
                backgroundColor: 'brown',
              }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Register
            </Button>
            <p style={{ fontSize: '1rem' }}>
              Already a user?
              <Link to="/login" style={{ color: 'brown' }}>
                {' '}
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Signup);
