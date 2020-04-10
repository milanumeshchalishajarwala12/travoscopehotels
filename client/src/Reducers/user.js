import { LOAD_USER_DETAIL, VIEW_CUISINES } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  firstname: null,
  email: null,
  phone: null,
  lastname: null,
  status: null,
  loyalityPoints: null,
  hasBooked: false,
  isCheckedIn: false,
  isCheckedOut: false,
  bookings: [],
};

export default function(state = initialState, action) {
  const {
    type,
    firstname,
    lastname,
    email,
    phone,
    status,
    loyalityPoints,
    bookings,
    hasBooked,
    isCheckedIn,
    isCheckedOut,
  } = action;

  switch (type) {
    case LOAD_USER_DETAIL:
      return {
        ...state,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        status: status,
        loyalityPoints: loyalityPoints,
        bookings: bookings,
        hasBooked: hasBooked,
        isCheckedIn: isCheckedIn,
        isCheckedOut: isCheckedOut,
      };

    case VIEW_CUISINES:
      return {
        ...state,
      };

    default:
      return state;
  }
}
