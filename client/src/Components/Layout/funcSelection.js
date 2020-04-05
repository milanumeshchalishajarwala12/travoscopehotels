import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/user';
import { getRooms } from '../../actions/room';

import { getStaff, addStaff } from '../../actions/staff';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const FuncSelection = ({
  getRooms,
  getUsers,
  getStaff,
  addStaff,
  user: { loading },
}) => {
  return (
    <div>
      <div className="admin_func_container">
        <div className="functionbox" style={{ marginTop: '0px' }}>
          <h2>USERS</h2>
          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/searchusers">
              {' '}
              Using <br />
              Name
            </Link>
          </Button>
          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/searchusersbystatus">
              {' '}
              Using <br />
              Status
            </Link>
          </Button>
          <Button
            onClick={(e) => getUsers()}
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/listofusers"> View all Users</Link>
          </Button>
        </div>
        <div className="functionbox">
          <h2>STAFF</h2>

          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/searchstaff"> Using Location</Link>
          </Button>
          <Button
            onClick={(e) => getStaff()}
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/listofstaff"> View all Staff</Link>
          </Button>
          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/addemployee"> Add Employee</Link>
          </Button>
        </div>
        <div className="functionbox">
          <h2>ROOMS</h2>
          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/searchrooms">Using Location</Link>
          </Button>
          <Button
            onClick={(e) => getRooms()}
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/listofrooms">View all Rooms</Link>
          </Button>
          <Button
            style={{
              width: '30%',
              backgroundColor: 'white',
              border: '1px solid black',
              margin: '20px 2px 20px 2px',
            }}
          >
            {' '}
            <Link to="/addrooms">
              {' '}
              Add <br />
              Room
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

FuncSelection.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getStaff: PropTypes.func.isRequired,
  addStaff: PropTypes.func.isRequired,
  getRooms: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, {
  getRooms,
  addStaff,
  getUsers,
  getStaff,
})(FuncSelection);
