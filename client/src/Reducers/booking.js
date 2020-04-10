import {
  BOOKING_SUCCESS,
  BOOKING_FAILURE,
  FETCH_ERROR,
  GET_BOOKINGS,
} from '../actions/types';

const initialState = {
  bookings: [],
  booking: null,
  loading: true,
  isCheckedIn: false,
  isCheckedOut: false,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,

        bookings: payload,
      };
    }

    case BOOKING_FAILURE:
      return {
        ...state,
        booking: null,
        loading: false,
      };

    case GET_BOOKINGS:
      return {
        ...state,
        bookings: payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}
