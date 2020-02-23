import React, { Component, Fragment } from 'react';

class BookingForm extends Component {
  render() {
    return (
      <Fragment>
        <section className="bookingformcontainer">
          <p>
            Find <br />
            Rooms
          </p>
          <form method="GET" action="/listofrooms" className="bookingform">
            <label>Destination</label>
            <select>
              <option value="seattle">Seattle, WA</option>
              <option value="newyorkcity">New York, NY</option>
              <option value="portland">Portland, OR</option>
            </select>
            <label>Check In</label>
            <input
              type="date"
              name="checkindate"
              placeholder="MM/DD/YYYY"
            ></input>
            <label>Check Out</label>
            <input
              type="date"
              name="checkoutdate"
              placeholder="MM/DD/YYYY"
            ></input>
            <label>No. of guests</label>
            <select name="noofguests">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button type="submit">Find rooms</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default BookingForm;
