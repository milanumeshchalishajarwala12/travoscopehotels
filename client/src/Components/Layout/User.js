import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, Redirect } from 'react-router-dom';

const Users = ({
  user: { firstname, lastname, email, phone, status, loyalitypoints }
}) => {
  return (
    <Fragment>
      <div className="usercontainer">
        <div style={{ float: 'left' }}>
          <h1>
            {firstname} {lastname}
          </h1>
          <p>Status: {status}</p>
          <p>Contact Number: {phone}</p>
          <p>Email: {email}</p>
          <p>Loyality Points: {loyalitypoints}</p>
        </div>
        {/*
        <Link to="/listofstaff">
          {' '}
          <button
            style={{
              border: '1px solid black',
              height: '2.5rem',
              width: '12rem',
              fontSize: '0.8rem'
            }}
            onClick={e => deleteStaff(_id)}
          >
            <DeleteIcon />
            Delete Employee
          </button>
        </Link>
        */}
      </div>
    </Fragment>
  );
};

export default connect(null, {})(Users);
