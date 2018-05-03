import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as trackingActions } from '../../redux/modules/tracking';

import { allUsersSelector } from '../../redux/selectors/trackingSelector';

require('../../../style/index.css');

const mapStateToProps = (state, props) => ({
  trackedUsers: allUsersSelector(state)
});

const mapDispatchToProps = {
  ...trackingActions
};

@connect(mapStateToProps, mapDispatchToProps)
class TrackingView extends Component {
  get trackedUsersList() { return Object.keys(this.props.trackedUsers || {}); }

  static propTypes = {
    trackedUsers: PropTypes.object,
  }

  componentDidMount() {
    this.props.getTrackingData({ dispatch: this.props.updateUserData });
  }

  renderUserList() {
    return this.trackedUsersList.map((userId) => {
      let user = this.props.trackedUsers[userId];
      return (
        <div key={user.id} className="user">
          {user.id}: {user.date}
        </div>
      )
    });
  }

  render() {
    if (this.trackedUsersList.length > 0) {
      return (
        <div className="userList">
          {this.renderUserList()}
        </div>
      )
    } else {
      return (
        <div className="userList">
          Loading...
        </div>
      )
    }

  }
}

export default TrackingView;
