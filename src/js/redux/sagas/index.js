import { all } from 'redux-saga/effects'
import { exampleSaga } from './exampleSaga';
import { quizListSaga } from './quizListSaga';
import { trackingSaga } from './trackingSaga';


export default function* sagas() {
  yield all([
    ...exampleSaga,
    ...quizListSaga,
    ...trackingSaga
  ]);
}
