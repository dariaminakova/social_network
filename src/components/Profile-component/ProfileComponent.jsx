// Module
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Profile from './Profile';

// Engine
import { userProfile, getStatus, updateStatus } from 'Engine/profileReducer';
// import AuthHOC from "../../shared/HOC/AuthHOC";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1752; // my id
    }
    this.props.userProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { userProfile, getStatus, updateStatus }),
  withRouter
  // AuthHOC
)(ProfileComponent);
