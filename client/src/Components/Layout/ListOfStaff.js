import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchStaff, getStaff } from '../../actions/staff';
import Employee from './Employee';
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';

const ListOfStaff = ({ staff: { staffs, loading } }) => {
  useEffect(() => {
    getStaff();
  }, [getStaff]);
  console.log(staffs);
  return (
    <Fragment>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1rem'
        }}
      >
        {staffs.length} employees found
      </h2>

      <Link to="/addemployee">
        <Button
          variant="contained"
          style={{
            margin: '30px 50px 10px 1200px',
            border: '1px solid black',
            height: '2.5rem',
            width: '13rem',
            fontSize: '0.8rem'
          }}
        >
          {' '}
          <Icon className="fa fa-plus-circle" color="primary" /> Add New
          Employee
        </Button>
      </Link>
      {staffs.map(staff => (
        <Employee key={staff._id} staff={staff} />
      ))}
    </Fragment>
  );
};

ListOfStaff.propTypes = {
  searchStaff: PropTypes.func.isRequired,
  staff: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  staff: state.staff
});

export default connect(mapStateToProps, { searchStaff })(ListOfStaff);
