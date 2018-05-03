import { take, put, call, fork, select, takeLatest } from 'redux-saga/effects'
import { constants as quizListConstants, actions as quizListActions } from '../modules/quizList';
import fetch from 'isomorphic-fetch';

import type { quizType } from '../../common/types/quiz';

export function fetchQuestionsApi() {
  return fetch(`http://localhost:8008/questions`)
    .then(response => response.json())
}

export function* fetchQuestions() {
  const result = yield call(fetchQuestionsApi)
  yield put(quizListActions.updateQuizList(result));
}

function* watchGetQuizList() {
  yield takeLatest(quizListConstants.GET_QUIZ_LIST, fetchQuestions);
}

export const quizListSaga = [
  fork(watchGetQuizList),
];
