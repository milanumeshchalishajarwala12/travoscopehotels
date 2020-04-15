import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginUser } from '../../actions/auth';
import { getBookings, bookSlot, bookslotforuser } from '../../actions/booking';
import BookingItem from './BookingItem';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const BookSlot = ({
  loginUser,
  getBookings,
  bookSlot,
  bookslotforuser,
  booking: { bookings },
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);
  const [formData, setFormData] = useState({
    email: '',
    email1: '',
    password: '',
    slotdate: '',
    slottime: ''
  });

  const { email, password, email1, slotdate, slottime } = formData;
  var massagetotal = 150;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    loginUser(email, password);
    getBookings(email);
  };

  const onSearch = e => {
    e.preventDefault();
    getBookings(email1);
  };

  return (
    <div>
      {' '}
      <h2
        style={{
          marginTop: '30px',
          fontFamily: 'Prata',
          fontSize: '2rem',
          textAlign: 'center'
        }}
      >
        Book A Slot for Deep Tissue Massage chmilan7@gmail.com
      </h2>
      {bookings.length == 0 && !isAuthenticated ? (
        <p style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
          Please Login or Enter the Email address by which you made reservation,
          so that we can retrieve your most recent reservation
          <div
            style={{
              width: '80%',
              margin: '20px 150px 20px 150px',
              height: '20rem'
            }}
          >
            <div
              style={{
                background: 'rgb(248,248,248)',
                width: '30%',
                float: 'left',
                height: '15rem',
                padding: '2rem',
                borderRadius: '10px'
              }}
            >
              <h2>Login</h2>
              <form>
                <TextField
                  style={{
                    width: '14rem',
                    height: 'auto',
                    margin: '0.5rem 1rem 0.5rem 1rem'
                  }}
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
                <br />
                <TextField
                  style={{
                    width: '14rem',
                    height: 'auto',
                    margin: '0.5rem 1rem 0.5rem 1rem'
                  }}
                  id="password"
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  onChange={e => onChange(e)}
                  required
                />
                <br />
                <Button
                  onClick={e => onSubmit(e)}
                  style={{
                    backgroundColor: 'brown',
                    width: '8rem',
                    height: 'auto',
                    margin: '2rem 1rem 1rem 1rem'
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  SIGN IN
                </Button>
              </form>
            </div>
            <div
              style={{
                background: 'rgb(248,248,248)',
                width: '30%',
                float: 'right',
                height: '15rem',
                padding: '2rem',
                borderRadius: '10px'
              }}
            >
              <h2>Enter Email Address</h2>
              <form>
                <TextField
                  style={{
                    width: '14rem',
                    height: 'auto',
                    margin: '0.5rem 1rem 0.5rem 1rem'
                  }}
                  id="email"
                  name="email1"
                  value={email1}
                  label="Email"
                  type="text"
                  onChange={e => onChange(e)}
                  required
                />
                <br />
                <Button
                  onClick={e => onSearch(e)}
                  style={{
                    backgroundColor: 'brown',
                    width: '15rem',
                    height: 'auto',
                    margin: '2rem 1rem 1rem 1rem'
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Get Reservations
                </Button>
              </form>
            </div>
          </div>
        </p>
      ) : (
        <div style={{ marginTop: '50px' }}>
          <p style={{ marginLeft: '50px', fontSize: '0.8rem' }}>
            Note: You can book massage appointment only for your most recent
            reservation{' '}
          </p>

          {bookings.map((booking, i) => {
            if (bookings.length > 0 && i === 0) {
              var stay =
                new Date(booking.checkoutdate) - new Date(booking.checkindate);
              var balance = new Date(booking.checkoutdate) - new Date(slotdate);
              var validity = stay - balance;

              return (
                <div>
                  <BookingItem key={booking._id} booking={booking} />
                  <div
                    style={{
                      width: '65%',
                      height: '10rem',
                      padding: '1rem',
                      marginLeft: '15rem'
                    }}
                  >
                    <p style={{ marginLeft: '15rem' }}>
                      Please select a time and date slot within your reservation
                      period{' '}
                    </p>
                    <form
                      style={{
                        margin: '0rem 2rem 0rem 2rem',
                        padding: '1rem'
                      }}
                    >
                      <input
                        style={{
                          backgroundColor: 'white',
                          width: '13rem',
                          padding: '0.3rem 0rem 0.3rem 1rem',
                          color: '#565656',
                          borderRadius: '5px',
                          border: '0.5px solid lightgrey',
                          margin: '1.5rem'
                        }}
                        type="date"
                        label="Select Date"
                        name="slotdate"
                        onChange={e => onChange(e)}
                        value={slotdate}
                      />
                      <Select
                        style={{
                          backgroundColor: 'white',
                          width: '13rem',
                          padding: '0.3rem 0rem 0.3rem 1rem',
                          color: '#565656',
                          borderRadius: '5px',
                          border: '0.5px solid lightgrey',
                          margin: '1.5rem'
                        }}
                        value={slottime}
                        onChange={e => onChange(e)}
                        name="slottime"
                      >
                        <MenuItem value="9:00 AM - 9:45 AM">
                          9:00 AM - 9:45 AM
                        </MenuItem>
                        <MenuItem value="10:00 AM - 10:45 AM">
                          10:00 AM - 10:45 AM
                        </MenuItem>
                        <MenuItem value="11:00 AM - 11:45 AM">
                          11:00 AM - 11:45 AM
                        </MenuItem>
                        <MenuItem value="12:00 PM - 12:45 PM">
                          12:00 AM - 12:45 AM
                        </MenuItem>
                        <MenuItem value="1:00 PM - 1:45 PM">
                          1:00 PM - 1:45 PM
                        </MenuItem>
                        <MenuItem value="2:00 PM - 2:45 PM">
                          2:00 PM - 2:45 PM
                        </MenuItem>
                        <MenuItem value="3:00 PM - 3:45 PM">
                          3:00 PM - 3:45 PM
                        </MenuItem>
                        <MenuItem value="4:00 PM - 4:45 PM">
                          4:00 PM - 4:45 PM
                        </MenuItem>
                        <MenuItem value="5:00 PM - 5:45 PM">
                          5:00 PM - 5:45 PM
                        </MenuItem>
                        <MenuItem value="6:00 PM - 6:45 PM">
                          6:00 PM - 6:45 PM
                        </MenuItem>
                        <MenuItem value="7:00 PM - 7:45 PM">
                          7:00 AM - 7:45 AM
                        </MenuItem>
                      </Select>
                      <Button
                        onClick={e => {
                          validity < 0 || validity > stay
                            ? alert(
                                'Please select a date under your reservation dates'
                              )
                            : bookSlot(
                                email || email1,
                                slottime,
                                slotdate,
                                booking.destination,
                                booking.checkindate,
                                booking.checkoutdate,
                                booking.roomnumber,
                                massagetotal,
                                booking.total,
                                booking.fullname
                              );
                        }}
                        style={{
                          backgroundColor: 'brown',
                          width: '13rem',
                          height: '2.5rem',
                          margin: '1rem 1rem 1rem 1rem',
                          display: 'inline-block'
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Book Now
                      </Button>
                    </form>
                  </div>
                </div>
              );
            } else {
            }
          })}
        </div>
      )}
    </div>
  );
};

BookSlot.propTypes = {
  booking: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getBookings: PropTypes.func.isRequired,
  bookSlot: PropTypes.func.isRequired,
  bookslotforuser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ booking: state.booking, auth: state.auth });

export default connect(mapStateToProps, {
  loginUser,
  getBookings,
  bookSlot,
  bookslotforuser
})(BookSlot);
