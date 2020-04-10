import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings } from '../../actions/booking';
import BookingItem from '../Layout/BookingItem';
import Button from '@material-ui/core/Button';

const CheckIn = ({ getBookings, booking: { bookings, loading } }) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);

  var art = bookings.map(booking => {
    if (new Date(booking.checkindate) - new Date() <= 10000000) {
      return (
        <Fragment>
          {' '}
          <BookingItem key={booking._id} booking={booking} />
          {!booking.isCheckedIn ? (
            <Button
              style={{
                background: '#373737',
                borderRadius: '2px',
                width: '10rem',
                float: 'left',
                color: 'white',
                margin: '0px 0px 0px 50px'
              }}
            >
              Check In
            </Button>
          ) : (
            <Button variant="disabled">Checked In</Button>
          )}
        </Fragment>
      );
    } else {
    }
  });
  return (
    <Fragment>
      {loading ? (
        ''
      ) : bookings.length === 0 ? (
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'Prata',
            fontSize: '1.3rem'
          }}
        >
          {' '}
          You have no upcoming reservation
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
          </h2>
          <h2
            style={{
              textAlign: 'left',
              fontFamily: 'Prata',
              fontSize: '1.3rem',
              margin: '1rem'
            }}
          >
            Your Upcoming Reservations:
          </h2>
          {art}
        </div>
      )}
    </Fragment>
  );
};

CheckIn.propTypes = {
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  bookings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking
});

export default connect(mapStateToProps, { getBookings })(CheckIn);
