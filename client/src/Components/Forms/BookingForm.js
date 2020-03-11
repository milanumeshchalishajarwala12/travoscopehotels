import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';

export function BookingForm() {
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
      <section className="bookingformcontainer">
        <p>
          Find <br />
          Rooms
        </p>
        <form
          onSubmit={e => handleSubmit(e)}
          action="/listofrooms"
          className="bookingform"
        >
          <label>Destination</label>
          <select
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
            value={checkindate}
            onChange={e => handleChange(e)}
            type="date"
            name="checkindate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>Check Out</label>
          <input
            value={checkoutdate}
            onChange={e => handleChange(e)}
            type="date"
            name="checkoutdate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>No. of guests</label>
          <select
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
              width: '8rem',
              backgroundColor: '#efe2ba',
              color: 'black',
              fontFamily: 'Cinzel',
              fontSize: '0.8rem',
              margin: '10px',
              padding: '5px',
              fontWeight: 'bold'
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Find Rooms{' '}
          </Button>
        </form>
      </section>
    </Fragment>
  );
}

export default BookingForm;
