import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import example from './modules/example';
import quizList from './modules/quizList';
import answers from './modules/answers';
import tracking from './modules/tracking';


export default combineReducers({
  example,
  quizList,
  routing,
  answers,
  tracking
});
