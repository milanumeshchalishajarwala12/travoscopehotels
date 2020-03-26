import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { adminLogin } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export function LoginForm({ auth: { isAuthenticated }, adminLogin }) {
  const [formData, setFromData] = useState({
    loginid: '',
    password: ''
  });

  const { loginid, password } = formData;

  const handleChange = e => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    adminLogin(loginid, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/funcselection" />;
  }

  return (
    <div className="adminloginformcontainer">
      <p
        style={{
          fontSize: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Prato',
          color: '#373737'
        }}
      >
        Admin Login
      </p>
      <form onSubmit={e => handleSubmit(e)}>
        <TextField
          style={{ width: '75%', margin: '20px 40px 20px 40px' }}
          name="loginid"
          value={loginid}
          label="Login ID"
          variant="filled"
          onChange={e => handleChange(e)}
        />
        <TextField
          style={{ width: '75%', margin: '20px 40px 20px 40px' }}
          name="password"
          value={password}
          label="Password"
          variant="filled"
          type="password"
          onChange={e => handleChange(e)}
        />
        <Button
          style={{
            background: '#373737',
            color: 'white',
            width: '60%',
            height: '3rem',
            margin: '10px 65px 10px 65px'
          }}
          type="submit"
          variant="contained"
          disableElevation
        >
          Login{' '}
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  adminLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { adminLogin })(LoginForm);
