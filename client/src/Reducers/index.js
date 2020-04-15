import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import user from './user';
import room from './room';
import booking from './booking';
import location from './location';

export default combineReducers({ alert, room, location, booking, auth, user });
