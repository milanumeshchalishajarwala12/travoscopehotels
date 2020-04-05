import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchRoomsByDestination } from '../../actions/room';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Redirect, Link } from 'react-router-dom';

const SearchRooms = ({ searchRoomsByDestination }) => {
  const [formData, setFormData] = useState({
    destination: ''
  });

  const { destination } = formData;

  const onChange = e => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        style={{
          border: '0.04rem solid black',
          margin: '20px 500px 20px 500px',
          padding: '1rem',
          borderRadius: '5px'
        }}
      >
        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Search Rooms by Location
          </InputLabel>
          <Select
            required="true"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={destination}
            onChange={e => onChange(e)}
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

        <br />

        <Button
          style={{
            width: '40%',
            margin: '10px 100px 10px 120px',
            backgroundColor: 'white',
            border: '1px solid black'
          }}
          onClick={e => searchRoomsByDestination(destination)}
        >
          <Link to="/listofrooms">Search </Link>
        </Button>
      </form>
    </div>
  );
};

SearchRooms.propTypes = {
  searchRoomsByDestination: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ staff: state.staff });

export default connect(mapStateToProps, { searchRoomsByDestination })(
  SearchRooms
);
