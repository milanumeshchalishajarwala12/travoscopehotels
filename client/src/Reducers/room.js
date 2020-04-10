import {
  FIND_ROOMS_SUCCESS,
  FIND_ROOMS_FAILURE,
  SEARCH_ROOMS,
  CLEAR_ROOMS,
} from '../actions/types';

const initialState = {
  rooms: [],
  room: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ROOMS:
    case FIND_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: payload,
        loading: false,
      };

    case FIND_ROOMS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case CLEAR_ROOMS:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
