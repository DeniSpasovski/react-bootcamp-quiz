import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { actions as answerActions } from '../../../../redux/modules/answers';

import './Question.css';

const mapDispatchToProps = {
  ...answerActions
};

@connect(null, mapDispatchToProps)
class Question extends PureComponent {
  get quizId() { return this.props.match.params.id; }
  get questionId() { return this.props.data.question.get('id'); }
  get questionTitle() { return this.props.data.question.get('question'); }

  renderAnswers() {
    return this.props.data.question.get('answers').map((answer) =>
      (<li key={answer.get('id')} onClick={(ev) => this.selectAnswerClick(answer.get('id'))}>
        <input type="radio" name={this.questionId} readOnly={true}
          checked={this.getAnswerState(answer.get('id'))} />
        {answer.get('text')}
      </li>)
    )
  }

  getAnswerState(answerId) {
    return this.props.data.answer === answerId;
  }

  selectAnswerClick(answerId) {
    this.props.updateAnswer({
      id: this.quizId,
      answer: { [this.questionId]: answerId }
    });
  }

  render() {
    return (
      <div className="question">
        <h4>{this.questionTitle}</h4>
        <ul>{this.renderAnswers()}</ul>
      </div>
    );
  }
}

export default withRouter(Question);
