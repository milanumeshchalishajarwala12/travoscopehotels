import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AddBookingItem = ({
  addbooking: { fullname, destination, slottime, slotdate }
}) => {
  var name = 'Deep Tissue Massage Appointment';
  return (
    <div
      style={{ background: 'smokewhite', height: '10rem' }}
      className="summarycontainer"
    >
      <div style={{ width: '40%', float: 'left' }}>
        <p
          style={{
            display: 'inline',
            fontSize: '1.1rem'
          }}
        >
          {name}
        </p>
        <p>
          Name:{' '}
          <p
            style={{
              display: 'inline',
              fontSize: '0.9rem'
            }}
          >
            {fullname}
          </p>
        </p>

        <h2
          style={{
            marginBottom: '0px',
            fontSize: '0.9rem'
          }}
        >
          {destination}
        </h2>

        <p>
          Appointment:{' '}
          <p
            style={{
              display: 'inline',
              fontSize: '1rem'
            }}
          >
            {new Date(slotdate).toDateString()}, {slottime}
          </p>
        </p>
      </div>
    </div>
  );
};

AddBookingItem.propTypes = {
  booking: PropTypes.object.isRequired
};

export default connect(null, {})(AddBookingItem);
