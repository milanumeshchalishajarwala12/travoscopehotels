import axios from 'axios';
import { GET_MENU, FETCH_ERROR, GET_CUST_MENU, CLEAR_ROOMS } from './types';
import { loadUser } from './auth';
import { loadUserDetails } from './user';

export const getMenu = location => async dispatch => {
  try {
    const body = JSON.stringify({ location });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await axios.post('/api/locations/name', body, config);
    dispatch({
      type: GET_MENU,
      name: result.data.name,
      Item1: result.data.Item1,
      Item2: result.data.Item2,
      Item3: result.data.Item3,
      Item4: result.data.Item4,
      Item5: result.data.Item5,
      Item6: result.data.Item6
    });
    dispatch(loadUser());
    dispatch(loadUserDetails());
  } catch (err) {
    dispatch({
      type: FETCH_ERROR
    });
  }
};

export const getCustMenu = cuisine => async dispatch => {
  try {
    const body = JSON.stringify({ cuisine });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = await axios.post('/api/locations/dish', body, config);
    dispatch({
      type: GET_CUST_MENU,
      cuisine: result.data.cuisine,
      dish1: result.data.dish1,
      p1: result.data.p1,
      dish2: result.data.dish2,
      p2: result.data.p2,
      dish3: result.data.dish3,
      p3: result.data.p3,
      dish4: result.data.dish4,
      p4: result.data.p4,
      dish5: result.data.dish5,
      p5: result.data.p5
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR
    });
  }
};

export const clearState = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_ROOMS
    });
  } catch (err) {
    dispatch({
      type: FETCH_ERROR
    });
  }
};
