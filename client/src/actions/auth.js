import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import axios from 'axios';

export const registerUser = ({
  firstname,
  lastname,
  email,
  phone,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };
  const body = JSON.stringify({ firstname, lastname, email, phone, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
