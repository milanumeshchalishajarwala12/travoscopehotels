import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BookingItem = ({
  booking: {
    fullname,
    noofguests,
    roomtype,
    bedtype,
    checkindate,
    checkoutdate,
    destination,
    isCheckedIn,
    isCheckedOut,
  },
}) => {
  console.log(isCheckedOut, isCheckedOut);
  var cin_temp = new Date(checkindate).toUTCString();
  var cout_temp = new Date(checkoutdate).toUTCString();
  var cin = cin_temp.substring(0, 16);
  var cout = cout_temp.substring(0, 16);
  return (
    <div
      style={{ background: 'smokewhite', height: '20rem' }}
      className="summarycontainer"
    >
      <div style={{ width: '40%', float: 'left' }}>
        <h2 style={{ fontSize: '1.6rem' }}>Booking Details</h2>
        <p>
          Name:{' '}
          <p
            style={{
              display: 'inline',
              fontSize: '1.1rem',
            }}
          >
            {fullname}, {noofguests} Guests
          </p>
        </p>

        <h2
          style={{
            marginBottom: '0px',
            marginTop: '1.5rem',
            fontSize: '1.3rem',
          }}
        >
          {destination}
        </h2>
        <p>
          Room:{' '}
          <p
            style={{
              display: 'inline',
              fontSize: '1rem',
            }}
          >
            {roomtype}, {bedtype}
          </p>
        </p>

        <p>
          Check-In:{' '}
          <p
            style={{
              display: 'inline',
              fontSize: '1rem',
            }}
          >
            {cin}
          </p>
        </p>
        <p>
          Check-Out:{' '}
          <p style={{ display: 'inline', fontSize: '1rem' }}>{cout}</p>
        </p>
      </div>
      <div
        className="summarypicture"
        style={{ width: '40%', float: 'right' }}
      ></div>
    </div>
  );
};

BookingItem.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default connect(null, {})(BookingItem);
