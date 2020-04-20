import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Room from '../Layout/Room';
import EditBookingForm from '../Forms/EditBookingForm';
import { connect } from 'react-redux';
import { getRooms, clearRoomState } from '../../actions/room';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import store from '../../store';

const ListOfRooms = ({ room: { rooms, loading } }) => {
  var cindate = localStorage.getItem('checkindate');
  var coutdate = localStorage.getItem('checkoutdate');

  const [state, setState] = useState({
    showTotal: false,
  });

  const { showTotal } = state;

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };
  if (!loading) {
    store.dispatch(clearRoomState());
  }
  return (
    <Fragment>
      <EditBookingForm />

      <div>
        <p
          style={{
            textAlign: 'center',
            marginLeft: '50px',
            fontFamily: 'Times New Roman',
          }}
        >
          Showing {rooms.length} Results in{' '}
          <b>{localStorage.getItem('destination')}</b> for{' '}
          <b>{localStorage.getItem('noofguests')}</b> guests from{' '}
          <b> {new Date(cindate).toUTCString().substring(0, 16)}</b> to{' '}
          <b>{new Date(coutdate).toUTCString().substring(0, 16)}</b>{' '}
        </p>
        {!rooms ? (
          ''
        ) : (
          <div>
            {rooms.map((room) => (
              <Room key={room._id} room={room} />
            ))}
          </div>
        )}
      </div>

      {localStorage.setItem('showTotal', showTotal)}
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
