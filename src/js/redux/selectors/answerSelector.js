import { createSelector } from 'reselect';

const answersData = state => state.answers;

const resultSelector = createSelector(
  answersData,
  payload => payload.get('answers')
);

const allAnswersSelector = state => { return resultSelector(state); };

export const answerSelector = (state, id) => {
  let allAnswers = allAnswersSelector(state);
  if (allAnswers.toJS) {
    return allAnswers.toJS()[id] || {};
  } else {
    return {};
  }
};
