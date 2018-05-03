import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

import { Question } from './Question';

//import './Quiz.css';

class QuizComponent extends PureComponent {
  get quizId() { return this.props.match.params.id; }
  get selectedQuiz() { return this.props.data.quiz; }
  get selectedAnswers() { return this.props.data.userAnswers; }
  get currentQuestionId() { return this.getQuizQuestion(this.state.currentQuestionIndex).get('id'); }

  constructor(props) {
    super(props);
    this.state = { currentQuestionIndex: 0 };
  }

  getQuizQuestion(questionIndex) {
    if (this.selectedQuiz && this.selectedQuiz.get('questions')) {
      return this.selectedQuiz.get('questions').toArray()[questionIndex];
    } else {
      return null;
    }
  }

  getQuizAnswer(questionIndex) {
    if (this.selectedAnswers && this.selectedAnswers) {
      return this.selectedAnswers[this.currentQuestionId];
    } else {
      return null;
    }
  }

  nextQuestion() {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });
  }

  submit() {
    this.props.history.push(`/quiz/results/${this.quizId}`);
  }

  // PRO-TIP - use render functions when you have nested logic
  renderActionButton() {
    if (this.getQuizQuestion(this.state.currentQuestionIndex + 1)) {
      return (<button onClick={(ev) => this.nextQuestion()} disabled={!this.getQuizAnswer(this.state.currentQuestionIndex)}>next</button>)
    } else {
      return (<button onClick={(ev) => this.submit()} disabled={!this.getQuizAnswer(this.state.currentQuestionIndex)}>submit</button>)
    }
  }

  render() {
    return (
      <div>
        <h3>{this.selectedQuiz.get('title')}</h3>
        <Question data={{
          question: this.getQuizQuestion(this.state.currentQuestionIndex),
          answer: this.getQuizAnswer(this.state.currentQuestionIndex),
        }} />
        {this.renderActionButton()}
      </div>
    );
  }
}

export default withRouter(QuizComponent);
