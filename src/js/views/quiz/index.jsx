import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as quizListActions } from '../../redux/modules/quizList';
import { actions as answerActions } from '../../redux/modules/answers';
import { quizSelector } from '../../redux/selectors/quizListSelector';
import { answerSelector } from '../../redux/selectors/answerSelector';
import { QuizComponent, QuizResults } from '../../common/components/Quiz';

require('../../../style/index.css');

const mapStateToProps = (state, props) => ({
  selectedQuiz: quizSelector(state, props.match.params.id),
  selectedAnswers: answerSelector(state, props.match.params.id)
});

const mapDispatchToProps = {
  ...quizListActions,
  ...answerActions
};

@connect(mapStateToProps, mapDispatchToProps)
class QuizView extends Component {
  get quizId() { return this.props.match.params.id; }
  get resultPage() { return this.props.match.path.indexOf('/results/') > 0; }

  static propTypes = {
    selectedQuiz: PropTypes.object,
  }

  componentDidMount() {
    this.props.getQuizList();
  }

  render() {
    if (this.props.selectedQuiz) {
      if (this.resultPage) {
        return (
          <div className="quiz">
            <QuizResults data={{
              quiz: this.props.selectedQuiz,
              userAnswers: this.props.selectedAnswers
            }} />
          </div>
        )
      } else {
        return (
          <div className="quiz">
            <QuizComponent data={{
              quiz: this.props.selectedQuiz,
              userAnswers: this.props.selectedAnswers
            }} />
          </div>
        )
      }
    }
    return (
      <div className="quiz">
        Loading...
      </div>
    )
  }
}

export default QuizView;
