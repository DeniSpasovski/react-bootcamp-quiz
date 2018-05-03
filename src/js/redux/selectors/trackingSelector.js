import { createSelector } from 'reselect';

const userData = state => state.tracking;

const resultSelector = createSelector(
  userData,
  payload => payload.get('users')
);

export const allUsersSelector = state => { return resultSelector(state).toJS ? resultSelector(state).toJS() : resultSelector(state); };

export const userSelector = (state, id) => {
  let allUsers = allUsersSelector(state);
  if (allUsers) {
    return allUsers[id] || {};
  } else {
    return {};
  }
};
