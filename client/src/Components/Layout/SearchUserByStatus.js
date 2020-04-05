import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchUserByStatus } from '../../actions/user';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Redirect, Link } from 'react-router-dom';

const SearchUserByStatus = ({ searchUserByStatus }) => {
  const [formData, setFormData] = useState({
    status: ''
  });

  const { status } = formData;

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
            Search User by Status
          </InputLabel>
          <Select
            required="true"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={status}
            onChange={e => onChange(e)}
            name="status"
            style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          >
            <MenuItem value="Silver">Silver</MenuItem>
            <MenuItem value="Gold">Gold</MenuItem>
            <MenuItem value="Platinum">Platinum</MenuItem>
            <MenuItem value="Elite">Elite</MenuItem>
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
          onClick={e => searchUserByStatus(status)}
        >
          <Link to="/listofusers">Search </Link>
        </Button>
      </form>
    </div>
  );
};

SearchUserByStatus.propTypes = {
  searchUserByStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ staff: state.staff });

export default connect(mapStateToProps, { searchUserByStatus })(
  SearchUserByStatus
);
