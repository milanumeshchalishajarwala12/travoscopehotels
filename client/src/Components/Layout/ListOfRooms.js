import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Room from '../Layout/Room';
import { connect } from 'react-redux';
import { getRooms } from '../../actions/room';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const ListOfRooms = ({ room: { rooms } }) => {
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <Fragment>
      <Link to="/addrooms">
        <Button
          variant="contained"
          style={{
            margin: '0px 50px 0px 1200px',
            border: '1px solid black',
            height: '2.5rem',
            width: '13rem',
            fontSize: '0.8rem',
          }}
        >
          {' '}
          Add Room
        </Button>
      </Link>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1rem',
        }}
      >
        {rooms.length} rooms found
      </h2>
      <div className="roomcontainertop">
        <div style={{ marginLeft: '170px', display: 'inline-block' }}>
          <p>Location</p>
        </div>
        <div style={{ marginLeft: '215px', display: 'inline-block' }}>
          <p>Room-Type</p>
        </div>
        <div style={{ marginLeft: '215px', display: 'inline-block' }}>
          <p>Price</p>
        </div>
        <div style={{ marginLeft: '250px', display: 'inline-block' }}>
          <p>What's Included</p>
        </div>
      </div>

      {rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </Fragment>
  );
};

Room.propTypes = {
  room: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
});
export default connect(mapStateToProps, {})(ListOfRooms);
