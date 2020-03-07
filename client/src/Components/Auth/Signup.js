import React, { Fragment, Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
  });

  const { firstname, lastname, email, phone, password, password2 } = formData;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    firstname,
    lastname,
    email,
    phone,
    password
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e, req, res) => {
    if (password !== password2) {
      alert('Passwords do not match');
    } else {
    }
  };

  return (
    <Fragment>
      <div className="signuppage">
        <div className="signupcontainer">
          <p>Join Travoscope Hotels</p>
          <form
            onSubmit={e => onSubmit(e)}
            style={{
              height: '35rem',
              padding: '3rem'
            }}
          >
            <TextField
              type="text"
              style={{ width: '80%', margin: '20px' }}
              label="First Name"
              name="firstname"
              value={firstname}
              onChange={e => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '80%', margin: '20px' }}
              label="Last Name"
              type="text"
              value={lastname}
              name="lastname"
              onChange={e => onChange(e)}
            />
            <br />
            <TextField
              style={{ width: '80%', margin: '20px' }}
              label="Email Id"
              type="email"
              value={email}
              name="email"
              onChange={e => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '80%', margin: '20px' }}
              label="Phone"
              type="number"
              value={phone}
              name="phone"
              onChange={e => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '80%', margin: '20px' }}
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={e => onChange(e)}
              required
            />
            <br />
            <TextField
              style={{ width: '80%', margin: '20px' }}
              label="Confirm Password"
              type="password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              required
            />
            <br />
            <Button
              style={{
                width: '60%',
                margin: '20px',
                backgroundColor: 'brown'
              }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Register
            </Button>
            or <Link to="/login">Login</Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Signup;
