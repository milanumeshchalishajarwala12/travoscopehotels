import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Room } from '../Layout/Room';
import { EditBookingForm } from '../Forms/EditBookingForm';

export const ListOfRooms = props => {
  return (
    <Fragment>
      <EditBookingForm />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </Fragment>
  );
};

ListOfRooms.propTypes = {};

export default ListOfRooms;
