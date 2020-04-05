import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addRoom } from '../../actions/room';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import store from '../../store';

const AddRoomsForm = ({ addRoom }) => {
  const [formData, setFormData] = useState({
    destination: '',
    roomtype: '',
    pricepernight: '',
    bedtype: '',
  });
  const [state, setState] = useState({
    wifi: false,
    laundry: false,
    airportPickupDrop: false,
    jacuzi: false,
  });

  const { destination, pricepernight, roomtype, bedtype } = formData;
  const { wifi, laundry, airportPickupDrop, jacuzi } = state;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const onSubmit = (e) => {
    addRoom(
      destination,
      pricepernight,
      roomtype,
      wifi,
      laundry,
      airportPickupDrop,
      jacuzi,
      bedtype
    );
  };
  return (
    <div className="addemployeeformcontainer" style={{ height: '29rem' }}>
      <form className="addemployeeform">
        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Location
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={destination}
            onChange={(e) => onChange(e)}
            name="destination"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
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
        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Room Type
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={roomtype}
            onChange={(e) => onChange(e)}
            name="roomtype"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          >
            <MenuItem value="Deluxe">Deluxe</MenuItem>
            <MenuItem value="Super Deluxe">Super Deluxe</MenuItem>
            <MenuItem value="Presidential Suite">Presidential Suite</MenuItem>
            <MenuItem value="Residential Suite">Residential Suite</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Bed Type
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={bedtype}
            onChange={(e) => onChange(e)}
            name="bedtype"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          >
            <MenuItem value="King Size">King Size</MenuItem>
            <MenuItem value="Queen Size">Queen Size</MenuItem>
            <MenuItem value="Double Bed">Double Bed</MenuItem>
            <MenuItem value="2 x Double Bed">2 x Double Bed</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Price Per Night"
          name="pricepernight"
          type="number"
          value={pricepernight}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <FormControlLabel
          style={{ color: '#373737' }}
          control={
            <Checkbox
              checked={wifi}
              onChange={(e) => onChange(e)}
              name="wifi"
            />
          }
          label="Wifi"
        />
        <br />
        <FormControlLabel
          style={{ color: '#373737' }}
          control={
            <Checkbox
              checked={laundry}
              onChange={(e) => onChange(e)}
              name="laundry"
            />
          }
          label="Laundry Service"
        />
        <br />
        <FormControlLabel
          style={{ color: '#373737' }}
          control={
            <Checkbox
              checked={airportPickupDrop}
              onChange={(e) => onChange(e)}
              name="airportPickupDrop"
            />
          }
          label="Airport Pickup/Drop service"
        />
        <br />
        <FormControlLabel
          style={{ color: '#373737' }}
          control={
            <Checkbox
              checked={jacuzi}
              onChange={(e) => onChange(e)}
              name="jacuzi"
            />
          }
          label="In-house Jacuzi"
        />
        <br />
        <Button
          onClick={(e) => onSubmit(e)}
          style={{
            width: '40%',
            margin: ' 0px 130px 10px 130px',
            backgroundColor: 'brown',
          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          <Link to="/listofrooms">Add Room</Link>
        </Button>
      </form>
    </div>
  );
};

AddRoomsForm.propTypes = {
  addRoom: PropTypes.func.isRequired,
};

export default connect(null, { addRoom })(AddRoomsForm);
