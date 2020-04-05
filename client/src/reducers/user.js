import {
  FETCH_ERROR,
  GET_USER,
  SEARCH_USER,
  DELETE_USER,
  UPDATE_USER
} from '../actions/types';

const initialState = {
  users: [],
  user: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
    case SEARCH_USER:
      return {
        ...state,
        users: payload,
        loading: false
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== payload.id),
        loading: false
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
