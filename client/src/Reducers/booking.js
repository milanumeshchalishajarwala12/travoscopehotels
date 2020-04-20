import {
  BOOKING_SUCCESS,
  BOOKING_FAILURE,
  FETCH_ERROR,
  GET_BOOKINGS,
  CHECKIN_SUCCESS,
  GET_ADDBOOKINGS
} from '../actions/types';

const initialState = {
  bookings: [],
  addbookings: [],
  booking: null,
  loading: true,
  isCheckedIn: false,
  isCheckedOut: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload, payload1 } = action;
  switch (type) {
    case BOOKING_SUCCESS: {
      return {
        ...state,
        loading: false,

        bookings: payload
      };
    }

    case BOOKING_FAILURE:
      return {
        ...state,
        booking: null,
        loading: false
      };

    case GET_BOOKINGS:
      return {
        ...state,
        bookings: payload
      };

    case GET_ADDBOOKINGS:
      return {
        ...state,
        addbookings: payload1
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case CHECKIN_SUCCESS:
      return {};

    default:
      return state;
  }
}
