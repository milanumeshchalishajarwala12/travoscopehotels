import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { clearRoomState } from '../../actions/room';
import { Redirect, Link } from 'react-router-dom';

const Room = ({
  loadBookingDetails,
  room: {
    roomtype,
    pricepernight,
    destination,
    isAvailable,
    bedtype,
    wifi,
    jacuzi,
    airportPickupDrop,
    laundry,
    roomnumber,
  },
  auth: { isAuthenticated },
}) => {
  const onSelect = (e) => {
    localStorage.setItem('roomtype', roomtype);
    localStorage.setItem('bedtype', bedtype);
    localStorage.setItem('pricepernight', pricepernight);
    localStorage.setItem('roomnumber', roomnumber);

    var totalprice = parseFloat(pricepernight * localStorage.getItem('days'));
    localStorage.setItem('totalprice', totalprice);
  };
  return (
    <div className="roomcontainer">
      <div className="roompicture"></div>
      <div>
        <div>
          <h2>
            {roomtype}, {bedtype}{' '}
          </h2>
          <div>
            <Link to="/addguestinfo">
              <Button
                onClick={(e) => onSelect(e)}
                style={{
                  float: 'right',
                  margin: '10px 20px 0px 0px',
                  background: '#373737',
                  color: 'white',
                  width: '15%',
                }}
              >
                Select
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: '9rem' }}>
        <p>What's Included:</p>
        <ul>
          {wifi ? (
            <li>
              <p> - Wifi</p>
            </li>
          ) : (
            ''
          )}
          {laundry ? (
            <li>
              <p> - Laundry</p>
            </li>
          ) : (
            ''
          )}
          {jacuzi ? (
            <li>
              <p> - In-House Jacuzi</p>
            </li>
          ) : (
            ''
          )}
          {airportPickupDrop ? (
            <li>
              <p> - Airport Pickup/Drop</p>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
      <div style={{ bottom: '0px' }}>
        <h2 style={{ border: 'none' }}>
          ${pricepernight}/night x {localStorage.getItem('days')} days = $
          {parseFloat(pricepernight * localStorage.getItem('days'))}
        </h2>
      </div>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Room);
