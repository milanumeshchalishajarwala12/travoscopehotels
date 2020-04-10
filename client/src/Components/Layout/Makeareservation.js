import React from 'react';
import PropTypes from 'prop-types';
import BookingForm from '../Forms/BookingForm';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
const Makeareservation = ({ room: { rooms, loading } }) => {
  return (
    <div>
      <BookingForm />
    </div>
  );
};

Makeareservation.propTypes = {
  room: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
});

export default connect(mapStateToProps, {})(Makeareservation);
