import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { searchRooms } from '../../actions/room';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';

const BookingForm = ({ searchRooms, room: { rooms, loading } }) => {
  const [formData, setFormData] = useState({
    destination: '',
    checkindate: '',
    checkoutdate: '',
    noofguests: 0,
  });

  const { destination, checkindate, checkoutdate, noofguests } = formData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    var checkindate_int = new Date(checkindate);
    var checkoutdate_int = new Date(checkoutdate);
    var today = new Date();
    var days =
      Math.abs(checkoutdate_int - checkindate_int) / 1000 / 60 / 60 / 24;
    if (checkindate_int - today >= -100000000) {
      if (days < 1) {
        alert('Check-In date and Check-Out date cannot be the same ');
        return <Redirect to="/makereservation" />;
      } else {
        localStorage.setItem('days', days);
        localStorage.setItem('destination', destination);
        localStorage.setItem('noofguests', noofguests);
        localStorage.setItem('checkindate', checkindate);
        localStorage.setItem('checkoutdate', checkoutdate);
        searchRooms(destination, stayArray, noofguests);
        console.log(stayArray);
        var bookingArray = [];
        var demo =
          new Date(localStorage.getItem('checkindate')).getTime() - 84600000;

        for (var i = 0; i < days; ++i) {
          demo = demo + 84600000;
          bookingArray.push(demo);
        }
      }
    } else {
      alert('Check-In date cannot be in Past');
    }
  };

  if (!loading && rooms.length > 0) {
    return <Redirect to="/listofrooms"></Redirect>;
  }
  var stayArray = [];
  var demo1 = new Date(checkindate) - 84600000;
  var stayDays =
    (new Date(checkoutdate) - new Date(checkindate)) / 1000 / 60 / 60 / 24;

  for (var i = 0; i < stayDays + 1; ++i) {
    demo1 = demo1 + 84600000;
    stayArray.push(new Date(demo1).toISOString().substring(0, 10));
  }

  return (
    <Fragment>
      <section className="bookingformcontainer">
        <h2
          style={{
            color: '#76323F',
            textAlign: 'center',
            fontFamily: 'Prata',
          }}
        >
          Find Rooms
        </h2>
        <div className="bookingform">
          <div style={{ display: 'inline-block', margin: '30px' }}>
            <label
              style={{
                color: '#565656',
                fontSize: '1.5rem',
              }}
            >
              Location
            </label>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{
                  backgroundColor: 'white',
                  width: '13rem',
                  padding: '0.3rem 0rem 0.3rem 1rem',
                  color: '#565656',
                  borderRadius: '5px',
                  border: '0.5px solid lightgrey',
                }}
                value={destination}
                onChange={(e) => handleChange(e)}
                name="destination"
              >
                <MenuItem value="Boston, MA">Boston, MA</MenuItem>
                <MenuItem value="Seattle, WA">Seattle, WA</MenuItem>
                <MenuItem value="New york, NY">New York, NY</MenuItem>
                <MenuItem value="Dallas, TX">Dallas, TX</MenuItem>
                <MenuItem value="Chicago, IL">Chicago, IL</MenuItem>
                <MenuItem value="Buffalo, NY">Buffalo, NY</MenuItem>
                <MenuItem value="Las Vegas, NV">Las Vegas, NV</MenuItem>
                <MenuItem value="Pheonix, AZ">Pheonix, AZ</MenuItem>
                <MenuItem value="Minneapolis, MN">Minneapolis, MN</MenuItem>
                <MenuItem value="Washington D.C.">Washington D.C.</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ display: 'inline-block', margin: '30px' }}>
            <label style={{ color: '#565656', fontSize: '1.5rem' }}>
              Check In
            </label>
            <input
              style={{
                backgroundColor: 'white',
                width: '12rem',
                borderRadius: '5px',
                padding: '0.3rem 0rem 0.3rem 1rem',
              }}
              type="date"
              placeholder={'MM/DD/YY'}
              onChange={(e) => handleChange(e)}
              name="checkindate"
              value={checkindate}
            />
          </div>
          <br />

          <div style={{ display: 'inline-block', margin: '30px' }}>
            {' '}
            <label
              style={{
                marginLeft: '20px',
                color: '#565656',
                fontSize: '1.5rem',
              }}
            >
              Guests
            </label>
            <Select
              style={{
                backgroundColor: 'white',
                width: '13rem',
                padding: '0.3rem 0rem 0.3rem 1rem',
                color: '#565656',
                borderRadius: '5px',
                border: '0.5px solid lightgrey',
              }}
              value={noofguests}
              onChange={(e) => handleChange(e)}
              name="noofguests"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </div>

          <div style={{ display: 'inline-block', margin: '30px' }}>
            <label style={{ color: '#565656', fontSize: '1.5rem' }}>
              Check Out
            </label>
            <input
              style={{
                backgroundColor: 'white',
                width: '11rem',
                borderRadius: '5px',
                padding: '0.3rem 0rem 0.3rem 1rem',
              }}
              value={checkoutdate}
              onChange={(e) => handleChange(e)}
              type="date"
              name="checkoutdate"
              placeholder="MM/DD/YYYY"
            ></input>
          </div>
          <br />
          <Link to="#">
            <Button
              style={{
                fontFamily: 'Prata',
                background: 'none',
                color: ' #76323F',
                margin: '20px 230px 20px 230px',
                width: '40%',
                borderRadius: '5px',
                border: '0.5px solid black',
              }}
              onClick={(e) => handleSubmit(e)}
            >
              Search Rooms
            </Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

BookingForm.propTypes = {
  searchRooms: PropTypes.func,
  room: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
});

export default connect(mapStateToProps, { searchRooms })(BookingForm);
