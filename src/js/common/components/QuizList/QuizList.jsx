import React, { PureComponent } from 'react';
import {
  withRouter
} from 'react-router-dom'

import './QuizList.css';

class QuizList extends PureComponent {
  startQuiz(id) {
    this.props.history.push('/quiz/take/' + id);
  }

  render() {
    const result = this.props.data;

    if (result && result.map) {
      return result.map(quiz => (
        <div key={quiz.get('id')} className="quizDescription">
          <h3>{quiz.get('title')}</h3>
          <p>{quiz.get('description')}</p>
          <button onClick={(ev) => this.startQuiz(quiz.get('id'))}>Start</button>
        </div>
      ))
    }
    return <div />;
  }
}

export default withRouter(QuizList);
