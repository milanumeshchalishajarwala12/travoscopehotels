import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';

export const EditBookingForm = props => {
  const [formData, setFormData] = useState({
    destination: '',
    checkindate: '',
    checkoutdate: '',
    noofguests: ''
  });

  const { destination, checkindate, checkoutdate, noofguests } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <Fragment>
      <div className="roomstopeditbar">
        <p
          style={{
            fontFamily: 'Raleway',
            color: 'brown',
            float: 'left',
            fontSize: '1.5rem',
            padding: '0.70rem',
            backgroundColor: 'white'
          }}
        >
          Edit Your Search{' '}
        </p>

        <form
          style={{ float: 'right' }}
          onSubmit={e => handleSubmit(e)}
          action="#"
          className=""
        >
          <label>Destination</label>
          <select
            style={{ width: '9rem' }}
            name="destination"
            value={destination}
            onChange={e => handleChange(e)}
          >
            <option value="seattle">Seattle, WA</option>
            <option value="newyorkcity">New York, NY</option>
            <option value="houston">Houston, TX</option>
            <option value="boston">Boston, MA</option>
            <option value="springfield">Springfield, MA</option>
            <option value="hartford">Hartford, CT</option>
            <option value="lasvegas">Las Vegas, NV</option>
            <option value="tuscon">Tuscon, AZ</option>
            <option value="minneapolis">Minneapolis, MN</option>
          </select>
          <label>Check In</label>
          <input
            style={{ width: '9rem' }}
            value={checkindate}
            onChange={e => handleChange(e)}
            type="date"
            name="checkindate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>Check Out</label>
          <input
            style={{ width: '9rem' }}
            value={checkoutdate}
            onChange={e => handleChange(e)}
            type="date"
            name="checkoutdate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>No. of guests</label>
          <select
            style={{ width: '8rem' }}
            name="noofguests"
            value={noofguests}
            onChange={e => handleChange(e)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <Button
            style={{
              backgroundColor: 'brown',
              color: 'white',
              fontFamily: 'Cinzel',
              fontSize: '0.8rem',
              margin: '10px',
              fontWeight: 'bold',
              width: '6rem'
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            SEARCH{' '}
          </Button>
        </form>
      </div>
    </Fragment>
  );
};
