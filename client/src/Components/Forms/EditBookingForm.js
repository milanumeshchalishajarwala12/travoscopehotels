import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { searchRooms } from '../../actions/room';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const EditBookingForm = ({ searchRooms, room: { rooms } }) => {
  const [formData, setFormData] = useState({
    destination: localStorage.getItem('destination'),
    checkindate: localStorage.getItem('checkindate'),
    checkoutdate: localStorage.getItem('checkoutdate'),
    noofguests: localStorage.getItem('noofguests'),
  });

  const { destination, checkindate, checkoutdate, noofguests } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    searchRooms(destination, noofguests);
  };

  const handleSubmit = () => {
    var checkindate_int = new Date(checkindate);
    var checkoutdate_int = new Date(checkoutdate);
    var today = new Date();
    var days = (checkoutdate_int - checkindate_int) / 1000 / 60 / 60 / 24;
    console.log(checkindate_int - today);
    if (checkindate_int - today >= -100000000) {
      if (days == 0) {
        alert('Check-In date and Check-Out date cannot be the same ');
      } else if (days < 0) {
        alert('Check-In date cannot be after Check-Out date');
      } else {
        localStorage.setItem('days', days);
        localStorage.setItem('destination', destination);
        localStorage.setItem('noofguests', noofguests);
        localStorage.setItem('checkindate', checkindate);
        localStorage.setItem('checkoutdate', checkoutdate);
        searchRooms(destination, noofguests);
      }
    } else {
      alert('Check-In date cannot be in Past');
    }
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
            backgroundColor: 'white',
          }}
        >
          Edit Your Search{' '}
        </p>

        <form style={{ float: 'right' }}>
          <Select
            style={{
              margin: '10px 5px 30px 5px',
              backgroundColor: 'white',
              width: '13rem',
              borderRadius: '5px',
              padding: '0.3rem 0rem 0.3rem 1rem',
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

          <label>Check In</label>
          <input
            style={{ width: '9rem' }}
            value={checkindate}
            onChange={(e) => handleChange(e)}
            type="date"
            name="checkindate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>Check Out</label>
          <input
            style={{ width: '9rem' }}
            value={checkoutdate}
            onChange={(e) => handleChange(e)}
            type="date"
            name="checkoutdate"
            placeholder="MM/DD/YYYY"
          ></input>
          <label>No. of guests</label>
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

          <Button
            style={{
              backgroundColor: 'brown',
              color: 'white',
              fontFamily: 'Cinzel',
              fontSize: '0.8rem',
              margin: '10px',
              fontWeight: 'bold',
              width: '6rem',
            }}
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            SEARCH{' '}
          </Button>
        </form>
      </div>
    </Fragment>
  );
};
EditBookingForm.propTypes = {
  searchRooms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
});
export default connect(mapStateToProps, { searchRooms })(EditBookingForm);
