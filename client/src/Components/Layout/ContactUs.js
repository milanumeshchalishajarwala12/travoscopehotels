import React, { userState, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { askQn } from '../../actions/user';
import { connect } from 'react-redux';

const ContactUs = ({ askQn }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const { fullname, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    askQn(fullname, email, message);
    alert('Message Successfully Sent');
    window.location.reload(true);
  };

  return (
    <div>
      <div className="contacttitle">
        <h2>Contact Us</h2>
      </div>
      <div className="contactmain">
        <div className="address">
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2rem' }}>
            Headoffice:
          </p>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1rem' }}>
            450 Ninth Ave, <br /> Seattle, WA 00009
          </p>
          <br />
          <br />
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2rem' }}>
            East Region:
          </p>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1rem' }}>
            450 Plainfield Ave, <br /> New York, NY 00020
          </p>
        </div>
        <div className="vl2"></div>
        <div className="contactform">
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2rem' }}>
            Have a Question?
          </p>
          <form>
            <TextField
              style={{
                color: 'brown',
                width: '24rem',
                height: 'auto',
                margin: '0.5rem 1rem 0.5rem 1rem',
              }}
              onChange={(e) => onChange(e)}
              id="email"
              label="Full Name"
              name="fullname"
              type="text"
              value={fullname}
              required
            />
            <br />
            <TextField
              style={{
                color: 'brown',
                width: '24rem',
                height: 'auto',
                margin: '0.5rem 1rem 0.5rem 1rem',
              }}
              onChange={(e) => onChange(e)}
              id="email"
              label="Email Id"
              name="email"
              type="email"
              value={email}
              required
            />
            <br />
            <label
              style={{
                margin: '30px 0px 10px 10px',
                fontFamily: 'Times New Roman',
                fontSize: '1rem',
              }}
            >
              Message:
            </label>
            <br />
            <TextField
              style={{
                margin: '15px',
                borderRadius: '7px',
                width: '24rem',
              }}
              onChange={(e) => onChange(e)}
              type="search"
              variant="outlined"
              name="message"
              type="text"
              value={message}
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
              Submit{' '}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  askQn: PropTypes.func.isRequired,
};

export default connect(null, { askQn })(ContactUs);
