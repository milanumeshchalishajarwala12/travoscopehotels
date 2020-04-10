import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import user from './user';
import room from './room';
import booking from './booking';
import bk from './bk';

export default combineReducers({ alert, room, bk, booking, auth, user });
