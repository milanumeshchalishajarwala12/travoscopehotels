import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings } from '../../actions/booking';
import BookingItem from '../Layout/BookingItem';
import { now } from 'moment';

const Mybookings = ({ getBookings, booking: { bookings, loading } }) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <Fragment>
      {loading ? (
        ''
      ) : bookings.length === 0 ? (
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'Prata',
            fontSize: '1.3rem',
            margin: '1rem',
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
              fontSize: '1rem',
            }}
          >
            {' '}
            You have {bookings.length} bookings
          </h2>
          {bookings.map((booking) => (
            <BookingItem key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Mybookings.propTypes = {
  getBookings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  booking: state.booking,
});

export default connect(mapStateToProps, { getBookings })(Mybookings);
