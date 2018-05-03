import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

import { Question } from './Question';

import './Quiz.css';

class QuizResults extends PureComponent {
  get selectedQuiz() { return this.props.data.quiz; }
  get selectedAnswers() { return this.props.data.userAnswers; }

  constructor(props) {
    super(props);
  }

  getQuizAnswer(questionId) {
    if (this.selectedAnswers && this.selectedAnswers) {
      return this.selectedAnswers[questionId];
    } else {
      return null;
    }
  }

  // PRO-TIP - use render functions when you have nested logic
  renderScore() {
    if (this.selectedQuiz && this.selectedQuiz.get('questions')) {
      let questions = this.selectedQuiz.get('questions').toJS();
      let score = [];
      let scoreCount = 0;

      questions.forEach(question => {
        let correctAnswer = question.answers.find(answer => answer.correct);
        let isCorrect = this.getQuizAnswer(question.id) === correctAnswer.id;
        score.push(isCorrect);
        scoreCount += isCorrect ? 1 : 0;
      })

      return (<div className={scoreCount === score.length ? 'green' : 'red'}>
        {scoreCount}/{score.length} Correct
      </div>)
    }

    return null;
  }

  render() {
    return (
      <div className='result'>
        <h3>Results: {this.selectedQuiz.get('title')}</h3>
        {this.renderScore()}
      </div>
    );
  }
}

export default withRouter(QuizResults);
