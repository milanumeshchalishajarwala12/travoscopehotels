import React from 'react';
import PropTypes from 'prop-types';

const Email = (props) => {
  return (
    <div>
      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.3rem' }}>
        Hello $,
      </p>

      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
        Welcome onboard.
      </p>

      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
        We are pleased to welcome you to the family.
      </p>

      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
        You are now a Member of the Silver Club at Travoscope Hotels.
      </p>

      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
        As a compliment, we are rewarding you $ loyality points.
      </p>
      <br />

      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
        We Hope You Have a gret Journey ahead with Travoscope Hotels!
      </p>
    </div>
  );
};

Email.propTypes = {};

export default Email;
