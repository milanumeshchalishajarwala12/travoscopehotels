import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user';
import Employee from './Employee';
import Button from '@material-ui/core/Button';
import User from '../Layout/User';

import Icon from '@material-ui/core/Icon';
import { get } from 'mongoose';

const ListOfUsers = ({ user: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  console.log(users);
  return (
    <Fragment>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1rem'
        }}
      >
        {users.length} Users Found
      </h2>
      {users.map(user => (
        <User key={user._id} user={user} />
      ))}
    </Fragment>
  );
};

ListOfUsers.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(ListOfUsers);
