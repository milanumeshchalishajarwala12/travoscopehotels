import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchStaff } from '../../actions/staff';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Redirect, Link } from 'react-router-dom';

const SearchStaff = ({ searchStaff }) => {
  const [formData, setFormData] = useState({
    destination: ''
  });

  const [state, setState] = useState({
    isCurrentEmployee: true
  });

  const { destination } = formData;

  const onChange = e => {
    console.log(formData);
    console.log(state);
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setState({ ...state, [e.target.name]: e.target.checked });
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
            Search employee by location
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
        <label style={{ color: '#373737', fontSize: '0.8rem' }}>
          View only currently working Employee{' '}
        </label>
        <Switch
          checked={state.isCurrentEmployee}
          onChange={e => onChange(e)}
          name="isCurrentEmployee"
          color="primary"
        />
        <br />

        <Button
          style={{
            width: '40%',
            margin: '10px 100px 10px 120px',
            backgroundColor: 'white',
            border: '1px solid black'
          }}
          onClick={e => searchStaff(destination, state.isCurrentEmployee)}
        >
          <Link to="/listofstaff">Search </Link>
        </Button>
        <p
          style={{
            fontSize: '0.6rem',
            textAlign: 'center',
            margin: '5px 100px 5px 100px',
            fontFamily: 'Times New Roman'
          }}
        >
          OR
        </p>
        <Link to="/addemployee">
          <Button
            style={{
              width: '40%',
              fontSize: '0.8rem',
              textAlign: 'center',
              color: 'brown',
              margin: '5px 100px 5px 120px',

              fontFamily: 'Times New Roman',
              backgroundColor: 'white',
              border: '1px solid black'
            }}
          >
            Add New Employee
          </Button>
        </Link>
      </form>
    </div>
  );
};

SearchStaff.propTypes = {
  searchStaff: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ staff: state.staff });

export default connect(mapStateToProps, { searchStaff })(SearchStaff);
