import {
  FIND_ROOMS_SUCCESS,
  FIND_ROOMS_FAILURE,
  SEARCH_ROOMS,
  CLEAR_ROOMS,
} from './types';
import axios from 'axios';

export const getRooms = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/rooms');
    console.log('Get Function called');
    dispatch({
      type: FIND_ROOMS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FIND_ROOMS_FAILURE,
    });
  }
};

export const searchRooms = (destination, noofguests) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ destination, noofguests });
    const res = await axios.post('/api/rooms/search', body, config);
    dispatch({
      type: SEARCH_ROOMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FIND_ROOMS_FAILURE,
    });
  }
};

export const clearRoomState = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ROOMS,
  });
};
