import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginUser } from '../../actions/auth';

const GuestInfoForm = ({
  auth: { isAuthenticated },
  user: { firstname, lastname, email, phone, loyalityPoints, status },
}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    str1: '',
    str2: '',
    city: '',
    state: '',
    zip: '',
  });

  const {
    Ufirstname,
    Ulastname,
    Uemail,
    Uphone,
    str1,
    str2,
    city,
    state,
    zip,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onProceed = (e) => {
    localStorage.setItem('firstname', Ufirstname || firstname);
    localStorage.setItem('lastname', Ulastname || lastname);
    localStorage.setItem('Uemail', Uemail || email);
    localStorage.setItem('phone', Uphone || phone);
    localStorage.setItem('loyalityPoints', loyalityPoints);
    localStorage.setItem('status', status);
    localStorage.setItem('str1', str1);
    localStorage.setItem('str2', str2);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('zip', zip);
  };
  return (
    <div className="addguestinfo">
      <h2>Guest Information</h2>
      <form>
        <div>
          {isAuthenticated ? (
            <div style={{ height: '10rem' }} className="summarycontainer">
              <div className="summaryroomdetails">
                <p>
                  Name:{' '}
                  <p
                    style={{
                      display: 'inline',
                      fontSize: '1rem',
                    }}
                  >
                    {firstname} {lastname}
                  </p>
                </p>
                <p>
                  Email:{' '}
                  <p style={{ display: 'inline', fontSize: '1rem' }}>{email}</p>
                </p>
                <p>
                  Contact Number:{' '}
                  <p style={{ display: 'inline', fontSize: '1rem' }}>{phone}</p>
                </p>
                <p>
                  Loyality Points:{' '}
                  <p style={{ display: 'inline', fontSize: '1rem' }}>
                    {loyalityPoints}
                  </p>
                </p>
                <p>
                  Status:{' '}
                  <p style={{ display: 'inline', fontSize: '1rem' }}>
                    {status}
                  </p>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'inline-block', margin: '1rem' }}>
                <TextField
                  variant="outlined"
                  label="Firstname"
                  style={{
                    background: 'white',
                    borderRadius: '5px',
                    border: '0.5px solid white',
                    width: '14rem',
                    height: 'auto',
                    margin: '0rem 1rem 0rem 0.5rem',
                  }}
                  name="Ufirstname"
                  type="text"
                  value={Ufirstname}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>

              <div style={{ display: 'inline-block' }}>
                <TextField
                  variant="outlined"
                  label="Lastname"
                  style={{
                    background: 'white',
                    borderRadius: '5px',
                    border: '0.5px solid white',
                    width: '14rem',
                    height: 'auto',
                    margin: '0rem 1rem 0rem 0.5rem',
                  }}
                  name="Ulastname"
                  type="text"
                  value={Ulastname}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div>
                <div style={{ display: 'inline-block', margin: '1rem' }}>
                  <TextField
                    variant="outlined"
                    label="Email"
                    style={{
                      background: 'white',
                      borderRadius: '5px',
                      border: '0.5px solid white',
                      width: '14rem',
                      height: 'auto',
                      margin: '0rem 1rem 0rem 0.5rem',
                    }}
                    name="Uemail"
                    type="email"
                    value={Uemail}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
              <div>
                <div style={{ display: 'inline-block', margin: '1rem' }}>
                  <TextField
                    variant="outlined"
                    label="Contact Number"
                    style={{
                      background: 'white',
                      borderRadius: '5px',
                      border: '0.5px solid white',
                      width: '14rem',
                      height: 'auto',
                      margin: '0rem 1rem 0rem 0.5rem',
                    }}
                    name="Uphone"
                    type="number"
                    value={Uphone}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          <h2 style={{ marginTop: '4rem' }}>Address Information</h2>
          <div style={{ margin: '1rem', display: 'inline-block' }}>
            <TextField
              variant="outlined"
              label="Street Address Line 1"
              style={{
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '40rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              name="str1"
              type="text"
              value={str1}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <br />
          <div style={{ margin: '1rem', display: 'inline-block' }}>
            <TextField
              variant="outlined"
              label="Street Address Line 2"
              style={{
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '40rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              name="str2"
              type="text"
              value={str2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div style={{ margin: '1rem', display: 'inline-block' }}>
            <TextField
              variant="outlined"
              label="City"
              style={{
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '14rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              name="city"
              type="text"
              value={city}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div style={{ margin: '1rem', display: 'inline-block' }}>
            <TextField
              variant="outlined"
              label="State"
              style={{
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '14rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              name="state"
              type="text"
              value={state}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div style={{ margin: '1rem', display: 'inline-block' }}>
            <TextField
              variant="outlined"
              label="Zip Code"
              style={{
                background: 'white',
                borderRadius: '5px',
                border: '0.5px solid white',
                width: '14rem',
                height: 'auto',
                margin: '0rem 1rem 0rem 0.5rem',
              }}
              name="zip"
              type="number"
              max="6"
              value={zip}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <br />
          <div>
            {' '}
            <Link to="/summary">
              <Button
                onClick={(e) => onProceed(e)}
                style={{
                  background: '#373737',
                  color: 'white',
                  borderRadius: '1px',
                  border: '0.5px solid white',
                  width: '14rem',
                  height: '4rem',
                  margin: '2rem',
                }}
              >
                Proceed To Summary
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

GuestInfoForm.propTypes = {
  user: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(GuestInfoForm);
