import { LOAD_USER_DETAIL, AUTH_ERROR, VIEW_CUISINES } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

//Load User details

export const loadUserDetails = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: LOAD_USER_DETAIL,
      firstname: res.data.User.firstname,
      lastname: res.data.User.lastname,
      email: res.data.User.email,
      phone: res.data.User.phone,
      status: res.data.User.status,
      loyalityPoints: res.data.User.loyalityPoints,
      bookings: res.data.User.bookings,
      hasBooked: res.data.User.hasBooked,
      isCheckedIn: res.data.User.isCheckedIn,
      isCheckedOut: res.data.User.isCheckedOut,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const viewCusines = () => async (dispatch) => {
  console.log('Function Called');
  try {
    dispatch({
      type: VIEW_CUISINES,
    });
  } catch (err) {
    dispatch({
      type: VIEW_CUISINES,
    });
  }
};
