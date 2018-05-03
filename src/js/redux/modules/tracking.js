import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const UPDATE_USER_DATA = 'app/example/UPDATE_USER_DATA';
const GET_TRACKING_DATA = 'app/example/GET_TRACKING_DATA';

export const constants = {
  UPDATE_USER_DATA,
  GET_TRACKING_DATA
};

// ------------------------------------
// Actions
// ------------------------------------

export const getTrackingData = createAction(GET_TRACKING_DATA, (disp) => disp);
export const updateUserData = createAction(UPDATE_USER_DATA, (userInfo) => userInfo);

export const actions = {
  updateUserData,
  getTrackingData
};

export const reducers = {
  [UPDATE_USER_DATA]: (state, { payload }) => {
    let oldStoreState = state.get('users');
    oldStoreState = oldStoreState.toJS ? oldStoreState.toJS() : oldStoreState;
    let newState = Object.assign({}, oldStoreState, { [payload.id]: payload });
    return state.merge(
      { users: newState }
    );
  }
}

export const initialState = () =>
  Map({
    users: {}
  })

export default handleActions(reducers, initialState());