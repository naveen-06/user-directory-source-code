import { createSelector } from 'reselect';

const users = state => state.users;

export const selectUsers = createSelector(
  [users],
  users => users.usersList
);

export const selectCurrentUser = createSelector(
  [users],
  users => users.currentUser
);