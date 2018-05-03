import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import type { quizType } from '../../common/types/quiz'

const GET_QUIZ_LIST = 'app/example/GET_QUIZ_LIST';
const UPDATE_QUIZ_LIST = 'app/example/UPDATE_QUIZ_LIST';

export const constants = {
  GET_QUIZ_LIST,
  UPDATE_QUIZ_LIST,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getQuizList = createAction(GET_QUIZ_LIST, () => ({}));
export const updateQuizList = createAction(UPDATE_QUIZ_LIST, (quizList: [quizType]) => ({ quizList: quizList }));

export const actions = {
  getQuizList,
  updateQuizList,
};

export const reducers = {
  [UPDATE_QUIZ_LIST]: (state, { payload }) =>
    state.merge({
      ...payload,
    }),
}

export const initialState = () =>
  Map({
    quizList: [],
  })

export default handleActions(reducers, initialState());
