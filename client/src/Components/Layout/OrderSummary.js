import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const OrderSummary = ({ user: { firstname } }) => {
  var roomnumber = localStorage.getItem('curr_roomnumber');
  var destination = localStorage.getItem('curr_destination');

  return (
    <div>
      <div style={{ height: '10rem' }} className="menu">
        <p
          style={{
            textAlign: 'left',
            margin: '1.5rem',
            fontSize: '2rem'
          }}
        >
          {firstname}, your order is accepted at cafeteria!
        </p>
        <p
          style={{
            textAlign: 'left',
            margin: '1.0rem',
            fontSize: '2rem'
          }}
        >
          {' '}
          It will be shortly delivered to Room {roomnumber}.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

OrderSummary.propTypes = {
  user: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {})(OrderSummary);
