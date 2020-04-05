import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchUser } from '../../actions/user';
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const SearchUser = ({ searchUser }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: ''
  });

  const { firstname, lastname } = formData;

  const onChange = e => {
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
        <TextField
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Firstname"
          type="text"
          value={firstname}
          name="firstname"
          onChange={e => onChange(e)}
        />

        <TextField
          style={{ width: '25rem', margin: '10px 0px 10px 0px' }}
          label="Lastname"
          type="text"
          value={lastname}
          name="lastname"
          onChange={e => onChange(e)}
        />

        <br />

        <Button
          style={{
            width: '40%',
            margin: '10px 100px 10px 120px',
            backgroundColor: 'white',
            border: '1px solid black'
          }}
          onClick={e => searchUser(firstname, lastname)}
        >
          <Link to="/listofusers">Search </Link>
        </Button>
      </form>
    </div>
  );
};

SearchUser.propTypes = {
  searchUser: PropTypes.func.isRequired
};

//const mapStateToProps = state => ({ staff: state.staff });

export default connect(null, { searchUser })(SearchUser);
