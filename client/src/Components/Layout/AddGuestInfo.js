import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginUser } from '../../actions/auth';
import GuestInfoForm from '../Forms/GuestInfoForm';

const AddGuestInfo = ({ loginUser, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      {!isAuthenticated ? (
        <div
          style={{
            transitionDuration: '700ms',
            padding: '2rem 0rem 2rem 1rem',
            height: '7rem',
            background: '#373737',
          }}
        >
          {' '}
          <div style={{ display: 'inline-block' }}>
            <label
              style={{
                color: 'white',
                fontSize: '1.5rem',
                fontFamily: 'Prata',
              }}
            >
              Email
            </label>
            <br />
            <TextField
              style={{
                color: 'brown',
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '14rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              id="email"
              label=""
              name="email"
              type="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div style={{ display: 'inline-block' }}>
            <label
              style={{
                color: 'white',
                fontSize: '1.5rem',
                fontFamily: 'Prata',
              }}
            >
              Password
            </label>
            <br />
            <TextField
              style={{
                color: 'brown',
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '14rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              id="password"
              label=""
              name="password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <Button
            onClick={(e) => loginUser(email, password)}
            style={{
              background: 'rgb(235, 235, 235)',
              color: 'black',
              width: '8rem',
              height: '3rem',
              margin: '2rem 1rem 1rem 1rem',
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Sign In{' '}
          </Button>{' '}
          <br />
          <h3
            style={{
              color: 'white',
              fontSize: '1.7rem',
              fontFamily: 'Prata',
              marginLeft: '10px',
            }}
          >
            Sign In For a Faster Checkout
          </h3>
        </div>
      ) : (
        ''
      )}
      <div>
        <GuestInfoForm />
      </div>
    </Fragment>
  );
};

AddGuestInfo.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(AddGuestInfo);
