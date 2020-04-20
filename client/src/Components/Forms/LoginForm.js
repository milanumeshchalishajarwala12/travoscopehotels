import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { loginUser, loadUser } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store';

export function LoginForm({ loginUser, isAuthenticated, loading }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    loginUser(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div className="loginformcontainer">
      <p style={{ fontSize: '1.5rem' }}>Login</p>

      <form>
        <TextField
          style={{
            color: 'brown',
            width: '14rem',
            height: 'auto',
            margin: '0.5rem 1rem 0.5rem 1rem',
          }}
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <TextField
          style={{
            width: '14rem',
            height: 'auto',
            margin: '0.5rem 1rem 0.5rem 1rem',
          }}
          id="password"
          name="password"
          value={password}
          label="Password"
          type="password"
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <Button
          style={{
            backgroundColor: 'brown',
            width: '8rem',
            height: 'auto',
            margin: '2rem 1rem 1rem 1rem',
          }}
          variant="contained"
          color="primary"
          onClick={(e) => {
            onSubmit(e);
          }}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
