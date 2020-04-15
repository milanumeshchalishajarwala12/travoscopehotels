import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings, checkUserOut, checkUserIn } from '../../actions/booking';
import BookingItem from '../Layout/BookingItem';
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom';

const CheckIn = ({
  checkUserIn,
  getBookings,
  checkUserOut,
  booking: { bookings, loading },
  user: { email }
}) => {
  useEffect(() => {
    getBookings();
  }, []);

  const check_In = e => {
    checkUserIn(localStorage.getItem('b_id'), localStorage.getItem('b_email'));
  };

  const check_Out = e => {
    checkUserOut(localStorage.getItem('b_id'), localStorage.getItem('b_email'));
  };

  var art = bookings.map((booking, i) => {
    if (
      new Date().toISOString().substring(0, 10) ==
      new Date(booking.checkindate).toISOString().substring(0, 10)
    ) {
      return (
        <Fragment>
          {' '}
          <BookingItem key={booking._id} booking={booking} />
          {!booking.isCheckedIn ? (
            <Link to="/">
              <Button
                onClick={e => {
                  localStorage.setItem('b_id', booking._id);
                  localStorage.setItem('b_email', booking.email);
                  alert('You are successfully Checked In');
                  check_In(e);
                  localStorage.setItem('curr_dest', booking.destination);
                  localStorage.setItem('curr_roomnumber', booking.roomnumber);
                }}
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
            </Link>
          ) : (
            <div>
              {booking.isCheckedIn && !booking.isCheckedOut ? (
                <div>
                  {' '}
                  <Button
                    style={{
                      background: 'black',
                      borderRadius: '2px',
                      width: '10rem',
                      float: 'left',
                      color: 'white',
                      margin: '0px 0px 0px 50px'
                    }}
                    variant="disabled"
                  >
                    &#10003; Checked In
                  </Button>
                  {new Date().toISOString().substring(0, 10) ==
                  new Date(booking.checkoutdate)
                    .toISOString()
                    .substring(0, 10) ? (
                    <Link to="/">
                      <Button
                        onClick={e => {
                          localStorage.setItem('b_id', booking._id);
                          localStorage.setItem('b_email', booking.email);

                          check_Out(e);

                          alert(
                            'You are successfully checked Out, Your booking is successfully Completed'
                          );
                        }}
                        style={{
                          background: 'white',
                          borderRadius: '2px',
                          width: '10rem',
                          float: 'left',
                          color: 'black',
                          margin: '0px 0px 0px 50px',
                          border: '1px solid black'
                        }}
                      >
                        Check Out
                      </Button>
                    </Link>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
              {booking.isCheckedOut ? (
                <div>
                  <Button
                    style={{
                      background: 'black',
                      borderRadius: '2px',
                      width: '20rem',
                      float: 'left',
                      color: 'white',
                      margin: '0px 0px 0px 50px'
                    }}
                    variant="disabled"
                  >
                    Booking Completed
                  </Button>
                </div>
              ) : (
                ''
              )}
            </div>
          )}
        </Fragment>
      );
    } else {
    }
  });
  return (
    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
      {bookings.length === 0 ? (
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
    </div>
  );
};

CheckIn.propTypes = {
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  bookings: PropTypes.object.isRequired,
  checkUserIn: PropTypes.func.isRequired,
  checkUserOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking,
  user: state.user
});

export default connect(mapStateToProps, {
  checkUserOut,
  checkUserIn,
  getBookings
})(CheckIn);
