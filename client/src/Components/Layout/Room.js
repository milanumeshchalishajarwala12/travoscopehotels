import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export const Room = props => {
  return (
    <div className="roomcontainer">
      <div className="roompicture"></div>
      <div style={{ float: 'left', bottom: '0px' }}>
        <h2>Presidential Suite</h2>
        <h3 style={{ fontSize: '0.9rem', margin: '10px 0px 0px 30px' }}>
          Amenities
        </h3>
        <ul>
          <li>Wifi</li>
          <li>Jacuzi</li>

          <li>Laundry</li>
          <li>Airport Pickup/drop</li>
        </ul>
        <Button
          style={{
            backgroundColor: 'brown',
            color: 'white',
            fontFamily: 'Cinzel',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            width: '10rem',
            float: 'left',
            margin: '20px 0px 10px 10px'
          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          BOOK ROOM
        </Button>
      </div>
      <div>
        <p> $550/night</p>
      </div>
    </div>
  );
};

Room.propTypes = {};

export default Room;
