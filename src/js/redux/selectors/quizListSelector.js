import { createSelector } from 'reselect';

const quizData = state => state.quizList;

const resultSelector = createSelector(
  quizData,
  payload => payload.get('quizList')
);

export const quizListSelector = state => { return resultSelector(state).toArray ? resultSelector(state).toArray() : resultSelector(state) };

export const quizSelector = (state, id) => {
  return quizListSelector(state).find(quiz => quiz.get('id') === id) || null;
};
