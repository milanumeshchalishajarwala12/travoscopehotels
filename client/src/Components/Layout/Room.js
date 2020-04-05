import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRoom } from '../../actions/room';

export const Room = ({
  deleteRoom,
  room: {
    _id,
    roomtype,
    pricepernight,
    destination,
    wifi,
    laundry,
    airportPickupDrop,
    jacuzi,
    bedtype,
  },
}) => {
  return (
    <div className="roomcontainer">
      <div style={{ width: '25%', display: 'inline-block' }}>
        <p>{destination}</p>
      </div>
      <div style={{ width: '25%', display: 'inline-block' }}>
        <p>{roomtype}</p>
      </div>
      <div style={{ width: '25%', display: 'inline-block' }}>
        <p>${pricepernight}/night</p>
      </div>
      <div style={{ width: '25%', display: 'inline-block' }}>
        <p>
          <ul>
            <li>Bed Type - {bedtype}</li>
            <li>Wifi - {wifi ? <span>Yes</span> : <span>No</span>}</li>
            <li>Laundry - {laundry ? <span>Yes</span> : <span>No</span>}</li>
            <li>
              Airport Pickup/Drop -{' '}
              {airportPickupDrop ? <span>Yes</span> : <span>No</span>}
            </li>
            <li>
              In-house Jacuzi - {jacuzi ? <span>Yes</span> : <span>No</span>}
            </li>
          </ul>{' '}
          <button
            style={{
              border: '1px solid black',
              height: '1.0rem',
              width: '5rem',
              fontSize: '0.6rem',
              marginLeft: '20px',
            }}
            onClick={(e) => console.log(_id)}
            //TODO
            //Add Delete Functioanity
          >
            Delete Room
          </button>
        </p>
      </div>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  deleteRoom: PropTypes.func.isRequired,
};

export default connect(null, { deleteRoom })(Room);
