import axios from 'axios';

export const sendOrder = (
  destination,
  roomnumber,
  orderdetails,
  total,
  orderdate
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    destination,
    roomnumber,
    orderdetails,
    total,
    orderdate
  });

  await axios.post('/api/orders', body, config);
};
