import {
  BOOKING_FAILURE,
  BOOKING_SUCCESS,
  MY_BOOKINGS,
  FIND_ROOMS_FAILURE,
  GET_BOOKINGS,
  GET_ADDBOOKINGS,
  FETCH_ERROR,
  CHECKIN_SUCCESS,
  CHECKIN_FAILURE,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from './types';
import axios from 'axios';
import { loadUser } from './auth';
import { loadUserDetails } from './user';

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
  subtotalprice,
  tax,
  total,
  isCheckedIn,
  isCheckedOut
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
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
    subtotalprice,
    tax,
    total,
    isCheckedIn,
    isCheckedOut,
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
    dispatch(loadUser());
    dispatch(loadUserDetails());
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const checkUserIn = (id, email) => async (dispatch) => {
  console.log('FUnc');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    id,
    email,
  });
  const booking = await axios.post(`api/bookings/checkbookingin`, body, config);

  dispatch(loadUser());
  dispatch(loadUserDetails());
};

export const checkUserOut = (id, email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ id, email });
  const booking = await axios.post(
    `api/bookings/checkbookingout`,
    body,
    config
  );
  dispatch(loadUser());
  dispatch(loadUserDetails());

  console.log(booking.data.isCheckedIn);
};
export const bookSlot = (
  email,
  slottime,
  slotdate,
  destination,
  checkindate,
  checkoutdate,
  roomnumber,
  massagetotal,
  total,
  fullname,
  isAuthenticated
) => async (dispatch) => {
  total = total + massagetotal;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    email,
    slottime,
    slotdate,
    destination,
    checkindate,
    checkoutdate,
    roomnumber,
    massagetotal,
    total,
    fullname,
    isAuthenticated,
  });
  console.log('FC', body);

  try {
    await axios.post('/api/bookings/bookslot', body, config);
  } catch (err) {
    console.log(err.message);
  }
};

export const bookslotforuser = (
  email,
  slottime,
  slotdate,
  destination,
  checkindate,
  checkoutdate,
  roomnumber,
  massagetotal,
  total,
  fullname
) => async (dispatch) => {
  console.log('FC');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    email,
    slottime,
    slotdate,
    destination,
    checkindate,
    checkoutdate,
    roomnumber,
    massagetotal,
    total,
    fullname,
  });
  console.log('FC', body);

  try {
    await axios.post('/api/bookings/regusermbooking', body, config);
  } catch (err) {
    console.log(err.message);
  }
};

export const getaddbookings = (email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    email,
  });

  try {
    const res = await axios.post('/api/bookings/getaddbookings', body, config);
    dispatch({
      type: GET_ADDBOOKINGS,
      payload1: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err.message,
    });
    console.log(err.message);
  }
};

export const checkInEmail = (
  firstname,
  destination,
  bedtype,
  roomtype,
  checkindate,
  checkoutdate,
  roomnumber,
  id,
  email
) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({
      firstname,
      destination,
      bedtype,
      roomtype,
      checkindate,
      checkoutdate,
      roomnumber,
      id,
      email,
    });
    console.log('Body: ' + body);
    const res = await axios.post('api/bookings/checkinemail', body, config);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
