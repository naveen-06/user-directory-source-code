import * as actionType from './userActionTypes';

export const setCurrentUser = currentUser => ({
  type: actionType.SET_CURRENT_USER,
  payload: currentUser
});

export const logoutUser = () => ({
  type: actionType.LOG_OUT
});

export const newUserToList = user => ({
  type: actionType.NEW_USER,
  payload: user
});