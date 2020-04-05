import {
  FETCH_ERROR,
  GET_STAFF,
  STAFF_ADD_SUCCESS,
  SEARCH_STAFF,
  DELETE_STAFF,
  UPDATE_STAFF
} from '../actions/types';

const initialState = {
  staffs: [],
  staff: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STAFF:
    case SEARCH_STAFF:
      return {
        ...state,
        staffs: payload,
        loading: false
      };

    case DELETE_STAFF:
      return {
        ...state,
        staffs: state.staffs.filter(staff => staff._id !== payload.id),
        loading: false
      };

    case STAFF_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        staff: payload
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
