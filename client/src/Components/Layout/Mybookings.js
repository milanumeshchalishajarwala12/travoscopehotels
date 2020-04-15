import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings } from '../../actions/booking';
import BookingItem from '../Layout/BookingItem';
import AddBookingItem from '../Layout/AddBookingItem';

const Mybookings = ({
  getBookings,
  booking: { bookings, addbookings, loading },
  user: { firstname, lastname, status, loyalityPoints, email, phone }
}) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <Fragment>
      <div className="profilecontainer">
        <div style={{ width: '40%', float: 'left' }}>
          <h2>
            {firstname} {lastname}'s Profile
            <p>Loyality Points: {parseInt(loyalityPoints)}</p>
            <p>{status} Member</p>
          </h2>
        </div>
        <div style={{ width: '40%', float: 'right' }}>
          <p style={{ fontFamily: 'cinzel', fontSize: '1.2rem' }}>
            Contact Details
          </p>
          <p style={{ fontFamily: 'prata', fontSize: '1rem' }}>
            Email: {email}
          </p>
          <p style={{ fontFamily: 'prata', fontSize: '1rem' }}>
            Phone: {phone}
          </p>
        </div>
      </div>
      <div>
        {bookings.length === 0 ? (
          <h2
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              fontSize: '1.3rem',
              margin: '1rem'
            }}
          >
            {' '}
            You have no bookings
          </h2>
        ) : (
          <div>
            <h2
              style={{
                textAlign: 'center',
                fontFamily: 'Prata',
                fontSize: '1rem'
              }}
            >
              {' '}
              You have {bookings.length} Reservations
            </h2>
            {bookings.map(booking => (
              <BookingItem key={booking._id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

Mybookings.propTypes = {
  getBookings: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking,
  user: state.user
});

export default connect(mapStateToProps, { getBookings })(Mybookings);
