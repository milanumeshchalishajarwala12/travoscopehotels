import {
  FETCH_ERROR,
  GET_ROOMS,
  ADD_ROOMS,
  DELETE_ROOM
} from '../actions/types';

const initialState = {
  rooms: [],
  room: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: payload,
        loading: false
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ADD_ROOMS:
      return {
        ...state,
        loading: false,
        room: payload
      };
    case DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter(room => room._id !== payload.id),
        loading: false
      };
    default:
      return state;
  }
}
