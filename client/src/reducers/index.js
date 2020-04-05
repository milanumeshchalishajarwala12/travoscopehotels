import { combineReducers } from 'redux';
import auth from './auth';
import room from './room';
import user from './user';

import staff from './staff';

export default combineReducers({ auth, user, room, staff });
