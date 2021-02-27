import * as actionType from './userActionTypes';
import users from '../../utils/dev-data.json';

function getLocalStroage() {
  return JSON.parse(localStorage.getItem('users'));
}

function setLocalStorage(state, newUser) {
  localStorage.setItem('users', JSON.stringify([...state, newUser]));
}

const INITIAL_STATE = {
  usersList: getLocalStroage() || users,
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (actionType.SET_CURRENT_USER):
      return {
        ...state,
        currentUser: action.payload
      }
    case (actionType.LOG_OUT):
      return {
        ...state,
        currentUser: null
      }
    case (actionType.NEW_USER):
      setLocalStorage(state.usersList, action.payload);
      return {
        ...state,
        usersList: [...state.usersList, action.payload]
      }
    default:
      return state;
  }
};

export default userReducer;