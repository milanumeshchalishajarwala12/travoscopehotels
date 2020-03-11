import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  return (
    <div className="loginformcontainer">
      <p style={{ fontSize: '1.5rem' }}>Login</p>
      <form>
        <TextField
          style={{
            color: 'brown',
            width: '14rem',
            height: 'auto',
            margin: '0.5rem 1rem 0.5rem 1rem'
          }}
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          required
        />
        <br />
        <TextField
          style={{
            width: '14rem',
            height: 'auto',
            margin: '0.5rem 1rem 0.5rem 1rem'
          }}
          id="password"
          name="password"
          value={password}
          label="Password"
          type="password"
          required
        />
        <br />
        <Button
          style={{
            backgroundColor: 'brown',
            width: '8rem',
            height: 'auto',
            margin: '2rem 1rem 1rem 1rem'
          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          SIGN IN
        </Button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Not a user?<Link to="/signup"> Sign Up</Link>
      </p>
    </div>
  );
}
