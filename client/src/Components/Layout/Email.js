import React from 'react';
import PropTypes from 'prop-types';

const Email = (props) => {
  return (
    <div className="email">
      <p>Hi Milan,</p>
      <br />
      <h2 style={{ textAlign: 'center' }}>
        Your booking at Los Angeles has been confirmed.
      </h2>
      <br />
      <div className="emailpicture"></div>
      <div style={{ height: '5rem', margin: '20px' }}>
        <p>Following are your booking details:</p>
        <p>Room Type: Super Deluxe, King</p>
        <p>Check-In: 2020/20/02</p>
        <p>Check-Out: 2020/20/09</p>
        <p>Number of Guests: 4</p>
      </div>
      <br />
      <div style={{ height: '5rem', margin: '20px' }}>
        <h3>Summary of Charges:</h3>

        <p>Subtotal: $11</p>
        <p>Tax: $12</p>
        <p>Total : $23</p>
      </div>
      <p>Have a great stay!</p>
    </div>
  );
};

Email.propTypes = {};

export default Email;
