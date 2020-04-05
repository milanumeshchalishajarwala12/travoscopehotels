import React from 'react';
import PropTypes from 'prop-types';
import AddEmployeeForm from '../Forms/AddEmployeeForm';

const AddEmployee = props => {
  return (
    <div>
      <p
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          fontFamily: 'Times New Roman'
        }}
      >
        {' '}
        Add New Employee
      </p>
      <AddEmployeeForm />
    </div>
  );
};

AddEmployee.propTypes = {};

export default AddEmployee;
