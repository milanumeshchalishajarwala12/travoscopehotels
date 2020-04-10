import {
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  MY_BOOKINGS,
  FIND_ROOMS_FAILURE,
  GET_BOOKINGS,
  FETCH_ERROR,
  GB,
} from './types';
import axios from 'axios';

export const confirmBooking = (
  firstname,
  bedtype,
  destination,
  roomnumber,
  roomtype,
  pricepernight,
  fullname,
  noofguests,
  email,
  phone,
  status,
  loyalitypoints,
  checkindate,
  checkoutdate,
  address,
  total
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    destination,
    roomnumber,
    roomtype,
    bedtype,
    pricepernight,
    fullname,
    noofguests,
    email,
    phone,
    status,
    loyalitypoints,
    checkindate,
    checkoutdate,
    address,
    total,
  });
  try {
    const booking = await axios.post('/api/bookings', body, config);
    const sendemail = await axios.post(
      'api/bookings/sendconfemail',
      body,
      config
    );
    console.log('Msg coming from email route: ', sendemail);
    dispatch({ type: BOOKING_SUCCESS, payload: booking.data });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: BOOKING_FAILURE,
    });
  }
};

export const addBookingToUser = (
  bedtype,
  email,
  destination,
  roomnumber,
  roomtype,
  pricepernight,
  noofguests,
  checkindate,
  checkoutdate,
  address,
  total
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    email,
    destination,
    roomnumber,
    roomtype,
    bedtype,
    pricepernight,
    noofguests,
    checkindate,
    checkoutdate,
    address,
    total,
  });
  console.log(body);
  try {
    const booking = await axios.post('/api/bookings/reguser', body, config);
    console.log(booking);
    dispatch({ type: BOOKING_SUCCESS, payload: booking.data });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: BOOKING_FAILURE,
    });
  }
};

export const getBookings = (email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email });

  try {
    const bookings = await axios.post('/api/bookings/mybookings', body, config);
    dispatch({
      type: GET_BOOKINGS,
      payload: bookings.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
    });
  }
};
