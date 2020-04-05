import { GET_USER, SEARCH_USER, FETCH_ERROR } from './types';
import axios from 'axios';

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');
    console.log(res.data.users);
    dispatch({
      type: GET_USER,
      payload: res.data.users
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const searchUser = (firstname, lastname) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ firstname, lastname });
    console.log('Body', body);

    const res = await axios.post('/api/users/', body, config);
    console.log(res.data);

    dispatch({
      type: SEARCH_USER,
      payload: res.data.users
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR
    });
  }
};

export const searchUserByStatus = status => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ status });
    console.log('Body', body);

    const res = await axios.post('/api/users/searchbystatus', body, config);
    console.log(res.data);

    dispatch({
      type: SEARCH_USER,
      payload: res.data.users
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR
    });
  }
};
