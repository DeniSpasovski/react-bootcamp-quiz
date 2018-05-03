import { take, put, call, fork, cancelled } from 'redux-saga/effects'
import { dispatch } from 'redux';
import { actions as trackingActions } from '../modules/tracking';

import { subscribeToLiveUpdates } from './websocket'

let subscirptionActive = false;

function socketEventIterator(event) {
  let deferred;

  if (!subscirptionActive) {
    subscirptionActive = true;
    const sub = subscribeToLiveUpdates((payload) => {
      if (deferred) {
        deferred.resolve(payload)
        deferred = null
      }
    });
  }

  return {
    nextEvent() {
      if (!deferred) {
        deferred = {}
        deferred.promise =
          new Promise(resolve => deferred.resolve = resolve)
      }
      return deferred.promise
    }
  }
}

function* listenToSocket(event, actionType) {
  const { nextEvent } = yield call(socketEventIterator, event)
  while (true) {
    const payload = yield call(nextEvent)
    yield put({ type: actionType, payload })
  }
}

function* subscribeToWebSocket(getState) {
  while (true) {
    const nextAction = yield take(trackingActions.getTrackingData)
    yield fork(listenToSocket, event, trackingActions.updateUserData)
  }
}

export const trackingSaga = [
  fork(subscribeToWebSocket),
];
