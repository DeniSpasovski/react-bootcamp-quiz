import { take, put, call, fork, cancelled } from 'redux-saga/effects'
import { dispatch } from 'redux';
import { constants as trackingConstants, actions as trackingActions } from '../modules/tracking';

import { subscribeToLiveUpdates } from '../services/websocket'

let subscirptionActive = false;


function* watchTrackingData() {
  const action = yield take(trackingConstants.GET_TRACKING_DATA);
  subscirptionActive = true;
  subscribeToLiveUpdates(action.payload.dispatch);
}

export const trackingSaga = [
  fork(watchTrackingData),
];
