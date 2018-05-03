import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as quizListActions } from '../../redux/modules/quizList';
import { quizListSelector } from '../../redux/selectors/quizListSelector';
import { QuizList } from '../../common/components/QuizList';

require('../../../style/index.css');

const mapStateToProps = state => ({
  quizList: quizListSelector(state),
});

const mapDispatchToProps = {
  ...quizListActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class HomeView extends Component {
  static propTypes = {
    quizList: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.getQuizList();
  }

  render() {
    return (
      <Fragment>
        <h2>Welcome to the react quiz app!</h2>
        <QuizList data={this.props.quizList} />
      </Fragment>
    )
  }
}

export default HomeView;
