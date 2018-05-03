import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const UPDATE_ANSWER = 'app/example/UPDATE_ANSWER';

export const constants = {
  UPDATE_ANSWER,
};

// ------------------------------------
// Actions
// ------------------------------------
export const updateAnswer = createAction(UPDATE_ANSWER, (answer) => answer);

export const actions = {
  updateAnswer
};

export const reducers = {
  [UPDATE_ANSWER]: (state, { payload }) => {
    let oldStoreState = state.get('answers');
    oldStoreState = oldStoreState.toJS ? oldStoreState.toJS() : oldStoreState;
    let oldAnswerState = oldStoreState[payload.id] || {};
    let updatedAnswer = Object.assign(oldAnswerState, payload.answer);
    let newState = Object.assign({}, oldStoreState, { [payload.id]: updatedAnswer });
    return state.merge(
      { answers: newState }
    );
  }
}

export const initialState = () =>
  Map({
    answers: {}
  })

export default handleActions(reducers, initialState());