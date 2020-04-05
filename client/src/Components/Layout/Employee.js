import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteStaff, updateStaff } from '../../actions/staff';
import { Link, Redirect } from 'react-router-dom';
import { UPDATE_STAFF } from '../../actions/types';
import store from '../../store';

const Employee = ({
  staff: {
    _id,
    name,
    gender,
    doj,
    dol,
    isCurrentEmployee,
    contact,
    email,
    department,
    salary,
    dob,
    destination,
  },
  deleteStaff,
}) => {
  var CurrentEmployee;
  if (isCurrentEmployee) {
    CurrentEmployee = 'Yes';
  } else {
    CurrentEmployee = 'No';
  }

  return (
    <Fragment>
      <div className="employeecontainer">
        <div style={{ float: 'left' }}>
          <h1>{name}</h1>
          <p>Date of Birth: {dob}</p>
          <p>Gender: {gender}</p>
          <p>Location: {destination} </p>
        </div>
        <div style={{ float: 'right' }}>
          <h5>Date of Joining: {doj}</h5>
          <h5>Currently Working: {CurrentEmployee}</h5>
          <h5>Date of Leaving: {dol}</h5>
          <h5>Contact number: {contact}</h5>
          <h5>Email ID: {email}</h5>
          <h5>Department: {department}</h5>
          <h5>Salary: ${salary}/per annum</h5>

          <Link to="/listofstaff">
            {' '}
            <button
              style={{
                border: '1px solid black',
                height: '2.5rem',
                width: '12rem',
                fontSize: '0.8rem',
              }}
              onClick={(e) => deleteStaff(_id)}
            >
              <DeleteIcon />
              Delete Employee
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

Employee.propTypes = {
  deleteStaff: PropTypes.func.isRequired,
};

export default connect(null, { deleteStaff })(Employee);
