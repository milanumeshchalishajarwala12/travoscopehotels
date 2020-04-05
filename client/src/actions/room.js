import { GET_ROOMS, FETCH_ERROR, ADD_ROOMS, DELETE_ROOM } from './types';
import axios from 'axios';

export const getRooms = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/rooms');
    dispatch({
      type: GET_ROOMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const searchRoomsByDestination = (destination) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ destination });
    const res = await axios.post('/api/rooms/search', body, config);
    dispatch({
      type: GET_ROOMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const addRoom = (
  destination,
  pricepernight,
  roomtype,
  wifi,
  laundry,
  airportPickupDrop,
  jacuzi,
  bedtype
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    destination,
    pricepernight,
    roomtype,
    wifi,
    laundry,
    airportPickupDrop,
    jacuzi,
    bedtype,
  });
  const res = await axios.post('/api/rooms', body, config);
  try {
    dispatch({
      type: ADD_ROOMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    const room = await axios.delete(`api/rooms/delete${id}`);
    console.log('Func called and req made', room);
    dispatch({
      type: DELETE_ROOM,
      payload: room,
    });
  } catch (err) {
    console.log(err.message);
  }
};
