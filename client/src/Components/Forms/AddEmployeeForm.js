import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { addStaff } from '../../actions/staff';
import { connect } from 'react-redux';

const AddEmployee = ({ addStaff }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    doj: '',
    dol: '',
    contact: '',
    email: '',
    department: '',
    salary: '',
    dob: '',
    destination: ''
  });

  const {
    name,
    gender,
    dob,
    doj,
    dol,
    contact,
    email,
    salary,
    destination,
    department
  } = formData;

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    console.log(state);
    addStaff(
      name,
      gender,
      dob,
      doj,
      dol,
      contact,
      email,
      salary,
      destination,
      department,
      state.isCurrentEmployee
    );
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [state, setState] = useState({
    isCurrentEmployee: true
  });

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const currentemployee = (
    <div>
      <label style={{ color: 'lightgrey', fontSize: '1rem' }}>
        Date of Leaving
      </label>
      <input
        disabled
        style={{
          backgroundColor: 'white',
          width: '17rem',
          height: '1.8rem',
          borderRadius: '5px',
          border: '1px solid #373737',
          fontFamily: 'Arial',
          padding: '0.3rem 0rem 0.3rem 1rem',
          margin: '10px 0px 10px 10px',
          color: 'lightgrey'
        }}
        type="date"
        onChange={e => onChange(e)}
        name="dol"
        value={dol}
      />
    </div>
  );

  const notcurrentemployee = (
    <div>
      <label style={{ color: '#373737', fontSize: '1rem' }}>
        Date of Leaving
      </label>
      <input
        style={{
          backgroundColor: 'white',
          width: '17rem',
          height: '1.8rem',
          borderRadius: '5px',
          border: '1px solid #373737',
          fontFamily: 'Arial',
          padding: '0.3rem 0rem 0.3rem 1rem',
          margin: '10px 0px 10px 10px'
        }}
        type="date"
        onChange={e => onChange(e)}
        name="dol"
        value={dol}
      />
    </div>
  );
  return (
    <div className="addemployeeformcontainer">
      <form className="addemployeeform" onSubmit={e => onSubmit(e)}>
        <TextField
          type="text"
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={e => onChange(e)}
          required
        />
        <br />

        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Gender{' '}
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={gender}
            onChange={e => onChange(e)}
            name="gender"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Rather Not Answer">Choose not to specify</MenuItem>
          </Select>
        </FormControl>

        <TextField
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Contact Number"
          type="number"
          value={contact}
          name="contact"
          onChange={e => onChange(e)}
        />
        <br />
        <TextField
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Email Id"
          type="email"
          value={email}
          name="email"
          onChange={e => onChange(e)}
          required
        />
        <br />
        <label style={{ color: '#373737', fontSize: '1rem' }}>
          Date of Birth
        </label>
        <input
          style={{
            backgroundColor: 'white',
            width: '17rem',
            height: '1.8rem',
            borderRadius: '5px',
            border: '1px solid #373737',
            fontFamily: 'Arial',
            padding: '0.3rem 0rem 0.3rem 1rem',
            margin: '10px 0px 10px 25px'
          }}
          type="date"
          onChange={e => onChange(e)}
          name="dob"
          value={dob}
        />
        <br />
        <label style={{ color: '#373737', fontSize: '1rem' }}>
          Date of Joining
        </label>
        <input
          style={{
            backgroundColor: 'white',
            width: '17rem',
            height: '1.8rem',
            borderRadius: '5px',
            border: '1px solid #373737',
            fontFamily: 'Arial',
            padding: '0.3rem 0rem 0.3rem 1rem',
            margin: '10px 0px 10px 10px'
          }}
          type="date"
          onChange={e => onChange(e)}
          name="doj"
          value={doj}
        />
        <br />
        <label style={{ color: '#373737', fontSize: '1rem' }}>
          Is Current Employee ?{' '}
        </label>
        <Switch
          checked={state.isCurrentEmployee}
          onChange={e => handleChange(e)}
          name="isCurrentEmployee"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <br />

        {state.isCurrentEmployee ? currentemployee : notcurrentemployee}

        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Location
          </InputLabel>
          <Select
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

        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Department
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={department}
            onChange={e => onChange(e)}
            name="department"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          >
            <MenuItem value="Cafeteria">Cafeteria</MenuItem>
            <MenuItem value="Laundry">Laundry</MenuItem>
            <MenuItem value="Cleaning">Cleaning</MenuItem>
            <MenuItem value="Management">Management</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Salary"
          type="number"
          value={salary}
          name="salary"
          onChange={e => onChange(e)}
          required
        />
        <br />

        <Button
          style={{
            width: '40%',
            margin: '10px 0px 10px 0px',
            backgroundColor: 'brown'
          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Employee
        </Button>
      </form>
    </div>
  );
};

AddEmployee.propTypes = {
  addStaff: PropTypes.func.isRequired
};

export default connect(null, { addStaff })(AddEmployee);
