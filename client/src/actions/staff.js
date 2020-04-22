import {
  GET_STAFF,
  FETCH_ERROR,
  STAFF_ADD_SUCCESS,
  STAFF_ADD_FAILURE,
  SEARCH_STAFF,
  DELETE_STAFF,
  UPDATE_STAFF,
} from './types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const getStaff = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/staff');
    dispatch({
      type: GET_STAFF,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const searchStaff = (destination, isCurrentEmployee) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ destination, isCurrentEmployee });

    const res = await axios.post('/api/staff/search', body, config);
    console.log(res.data);

    dispatch({
      type: SEARCH_STAFF,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const addStaff = (
  loginid,
  password,
  name,
  gender,
  dob,
  doj,
  dol,
  contact,
  email,
  salary,
  destination,
  department,
  isCurrentEmployee
) => async (dispatch) => {
  try {
    const body = JSON.stringify({
      loginid,
      password,
      name,
      gender,
      dob,
      doj,
      dol,
      contact,
      email,
      salary,
      destination,
      department,
      isCurrentEmployee,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/staff', body, config);
    dispatch({
      type: STAFF_ADD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: STAFF_ADD_FAILURE,
    });
  }
};

export const deleteStaff = (id) => async (dispatch) => {
  try {
    const staff = await axios.delete(`api/staff/${id}`);
    console.log(staff.data);
    dispatch({
      type: DELETE_STAFF,
      payload: staff,
    });
  } catch (err) {
    console.log(err.message);
  }
};
