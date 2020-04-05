import React from 'react';
import PropTypes from 'prop-types';
import AddRoomsForm from '../Forms/AddRoomsForm';

const AddRooms = props => {
  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Add Room</p>

      <AddRoomsForm />
    </div>
  );
};

AddRooms.propTypes = {};

export default AddRooms;
