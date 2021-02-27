import { combineReducers } from 'redux';

import userReducer from './userReducer/userReducer';

export const rootReducer = combineReducers({
  users: userReducer
});