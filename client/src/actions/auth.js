import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_ERROR,
  ADMIN_LOADED
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const loadAdmin = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = axios.get('/api/auth');
    dispatch({
      type: ADMIN_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const adminLogin = (loginid, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ loginid, password });
  try {
    const res = axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadAdmin());
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE
    });
    console.log(err.message);
  }
};
